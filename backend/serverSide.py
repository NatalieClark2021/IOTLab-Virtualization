import time
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes




#array of valid IP and code sent != null =  valid terminal output
#connect to a es32 with the given IP and flash
def flash(x,y):
    print(x)
    print(y)
    return "done"
    
    
@app.route('/data', methods=['POST'])
    
def receive_data():
    #Read JSON data
    data = request.get_json()
    
    device_ip = data.get("deviceIp")
    flash_code = data.get("flashCode")
    flash(device_ip,flash_code)
    if device_ip and flash_code:
        print("yippee")  # Log "yippee" if both values are present
    else:
        print("!yippee")
    response_data = "Data received successfully"
    print(response_data)

    return jsonify(response_data)


if __name__ == '__main__':
    app.run(port=80)