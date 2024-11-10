import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';


import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { get } from 'http';

@Component({
  selector: 'app-flash',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './flash.component.html',
  styleUrl: './flash.component.css'
})
export class FlashComponent {
  url = 'http://127.0.0.1:80/data';
  name = '';
  deviceIp = new FormControl('');
  flashCode = new FormControl('Enter Code...');




 //http get request to aria
  async sendForm(): Promise<String>{

    const dataToSend = {
      deviceIp: this.deviceIp.value,
      flashCode: this.flashCode.value
    };
        const response = await fetch(this.url, {
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
    var termVal = document.getElementById("terminalValue");
    if(termVal)
      termVal.innerText = textResponse + ", - from server ";
    return await "ok" ?? null;
  }

   //http get request to aria
}

