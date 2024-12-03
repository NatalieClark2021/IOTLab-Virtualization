import time
from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import subprocess
app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes


class User:
  def __init__(this,name, password):
    this.name = name
    this.password = password
    
users = []

testerUser = User("test", "test")
users.append(testerUser)


class Device:
  def __init__(this,name, ip):
    this.name = name
    this.ip = ip
    
devices = []

testerDevice = Device("test", "test")

devices.append(testerDevice)

#testables add delete and verify
def add(location,username,password):
    found = False
    for item in location:
        if item.name == username:
            found = True
    
    if(not found):
        tempUser = User(username, password)
        location.append(tempUser)
        response_data = "Object " + username +" added"
    else:
        response_data = "User or Password already in use"
    return response_data

def delete(location, name):
    response_data = "Failure to delete object"
    for item in location:
        if item.name == name:
            location.remove(item)
            response_data = "Object " + name + " removed"
            printUsers()
            printDevices()
            break
        
    
    printUsers()
    printDevices()
    return response_data

def verify(username, password):
    
    for item in users:
        if item.name == username:
            if item.password == password:
                 response_data = item.name + " is successfully logged in"
                 return response_data
    response_data = "Wrong username or password"               
    return response_data
        
        
def printUsers():
    for user in users:
        print(user.name)
        
def printDevices():
    for user in devices:
        print(user.name)

#http requests that call the testables
@app.route('/adduser', methods=['POST']) #working
def addUser():
    response_data = "failure"
    data = request.get_json()
    
    username = data.get("username")
    password = data.get("password")

    if username and password:
        response_data = add(users,username, password)

    else:
        response_data = "error"
    
    print(response_data)
    return jsonify({"message": response_data})



@app.route('/deleteuser', methods=['POST']) #working
def deleteUser():
    #delete user from array users
    response_data = "failure"
    data = request.get_json()
    
    username = data.get("username")
    

    if username:
        response_data = delete(users, username)

    else:
        response_data = "error"
    
    print(response_data)
    return jsonify({"message": response_data})
    
    

@app.route('/loginuser', methods=['POST'])
def loginUser():
    #return boolean if user is in array
    response_data = "failure"
    data = request.get_json()
    
    username = data.get("username")
    password = data.get("password")

    if username and password:
        response_data = verify(username, password)

    else:
        response_data = "error"
    
    print(response_data)
    return jsonify({"message": response_data})
   
    
    
@app.route('/adddevice', methods=['POST'])
def addDevice():
    #add device to array devices
    response_data = "failure"
    data = request.get_json()
    
    name = data.get("name")
    ip = data.get("ip")

    if name and ip:
        response_data = add(devices,name,ip)

    else:
        response_data = "error"
    
    print(response_data)
    return jsonify({"message": response_data})    
   

@app.route('/deletedevice', methods=['POST'])
def deleteDevice():
    #delete device from array devices
    response_data = "failure"
    data = request.get_json()
    
    name = data.get("name")
    ip = data.get("ip")
    

    if name and ip:
        response_data = delete(devices, name)

    else:
        response_data = "error"
    
    print(response_data)
    return jsonify({"message": response_data})    
    

@app.route('/data', methods=['POST'])
def receive_data():
    #Read JSON data
    response_data = "failure"
    data = request.get_json()
    
    device_ip = data.get("deviceIp")
    flash_code = data.get("flashCode")
    if device_ip and flash_code:
        if(create_ino_file("userSketch", flash_code)):
            response_data = "Data received successfully"
        else:
            response_data = "Compilation failure"
        
        # Log "yippee" if both values are present
    else:
        response_data = "input error"
        #on error to compile return data not successful
    print(response_data)

    return jsonify(response_data)

test1 = "void setup() { Serial.begin(9600); pinMode(2, OUTPUT); Serial.println(1); } void loop() { digitalWrite(2, HIGH); Serial.println(1); delay(500); digitalWrite(2, LOW); Serial.println(0); delay(500); }"

command_args = [
    "arduino-cli", 
    "compile", 
    "C:\\Users\\Natal\\OneDrive\\demo\\Documents\\WORKzone\\IOTLab-Virtualization\\backend\\userSketch", 
    "-b", 
    "esp32:esp32:esp32", 
    "--build-property", 
    "build.boot=dio", 
    "-p", 
    "COM5", 
    "-u"
]


def create_ino_file(file_name, content):

    
    print("made it to create ino")

    # os.makedirs(user_folder, exist_ok=True)
    
    if not file_name.endswith(".ino"):
        file_name += ".ino"

    try:
        
        with open("C:\\Users\\Natal\\OneDrive\\demo\\Documents\\WORKzone\\IOTLab-Virtualization\\backend\\userSketch\\userSketch.ino", 'w') as ino_file:
            ino_file.write(content)
        
        if(subprocess.call(command_args) == 0):
            return True
        else:
            return False
        
        
    
    except Exception as e:
        print(f"Error: {e}")
    
    
        
if __name__ == '__main__':

    app.run(port=80)
