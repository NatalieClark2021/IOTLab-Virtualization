import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { get } from 'http';

@Component({
  selector: 'app-flash',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './flash.component.html',
  styleUrl: './flash.component.css'
})
export class FlashComponent {
  url = 'http://127.0.0.1:80';
  name = '';
  deviceIp = new FormControl(``);

  devices = [
    { name: 'Device 1', ip: '192.168.1.101' },
    { name: 'Device 2', ip: '192.168.1.102' },
    { name: 'Device 3', ip: '192.168.1.103' }
  ];

  // Form controls
  selectedDevice = new FormControl(this.devices[0].ip);


  flashCode = new FormControl(
    `void setup() {
    // Your setup code here


  }
  

void loop() {
    // Your loop code here


  }`);


 //http get request to aria
  async sendForm(): Promise<String>{
    var termVal = document.getElementById("terminalValue");
    if(termVal){
      termVal.innerText = "Loading...";
   }
    const dataToSend = {
      //deviceIp: this.deviceIp.value,
      flashCode: this.flashCode.value
    };

        const response = await fetch(`${this.url}/data`, {
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
    
    if(termVal)
      termVal.innerText = textResponse + " - with great regard server";
    return await "ok" ?? null;
  }

   //http get request to aria
}

