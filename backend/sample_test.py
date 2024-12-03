import pytest
from serverSide import users,User,add,delete,verify

def test_add_user_success(): #test adding a single users add -expects success
    users.clear()

    username = "testuser"
    password = "testpass"
    output = add(users,username, password)
    
    assert output == "Object testuser added" 
    assert len(users) == 1 

def test_add_multiple_users():  #test multiple users add -expects success
    users.clear()

    add(users,"test1", "pass1")
    add(users,"test2", "pass2")
    add(users,"test3", "pass3")

    assert len(users) == 3 
    assert users[0].name == "test1"

def test_add_user_duplicateUser(): #test duplicate username (expects failure)
    users.clear()

    username = "testuser"
    password = "testpass"
    output = add(users,username, password)
    output = add(users,"testuser", "gfhjkl")
    
    assert output == "User or Password already in use" 
    assert len(users) == 1 
    





def test_delete_second(): #check that middle array delete works
    users.clear()
    
    
    add(users,"test1", "pass1")
    add(users,"test2", "pass2")
    add(users,"test3", "pass3")
    
    current = len(users)
    
    result = delete(users,"test2")
    assert result == "Object test2 removed"
    
def test_delete_nonexistant_user(): #Attempt to delete a user that does not exist
    add(users,"test1","pass1")
    
    current = len(users)
    
    response =delete(users,"test2")
    
    assert response == "Failure to delete object"
    


    
    
    

def test_both_valid(): #valid user and pass
    add(users,"test1", "pass1")
    output = verify("test1", "pass1")
    
    assert output == "test1 is successfully logged in"
    
    
def test_pass_invalid(): #valid username invalid pass
    add(users,"test1", "pass1")
    output = verify("test1", "pass4")
    
    assert output == "Wrong username or password"
        
def test_username_invalid():    #invalid username and valid password
    add(users,"test1", "pass1")
    output = verify("test4", "pass3")
    
    assert output == "Wrong username or password"      
    