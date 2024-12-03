import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { UrlSegment } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  url = 'http://127.0.0.1:80';
  username = new FormControl('');
  password= new FormControl('');

  //Class User imported from module
    //atttributes: username and password

    //login func


     //subclass Student

     //subclass Admin

  //


  async login(): Promise<String>{

    const dataToSend = {
      username: this.username.value,
      password: this.password.value
    };

        const response = await fetch(`${this.url}/loginuser`, {
        method: 'POST',  // Use POST method
        headers: {
          'Content-Type': 'application/json',  // Specify JSON content type
        },
        body: JSON.stringify(dataToSend),  // Send the data as JSON
      });

    const textResponse = await response.text();
    console.log(dataToSend);
    console.log(response);
    console.log(textResponse);
    var termVal = document.getElementById("response");
    if(termVal)
      termVal.innerText = "Response from server: " +textResponse;
    return await "ok" ?? null;
  }


}
