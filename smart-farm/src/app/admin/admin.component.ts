import { Component } from '@angular/core';
import { FormControl , FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  url = 'http://127.0.0.1:80';
  userName = new FormControl('');
  pass = new FormControl('');
  IP = new FormControl('');
  deviceName = new FormControl('');
  selectedValue = '';

  options = [
    { value: 'option2', label: 'Add Device' },
    { value: 'option4', label: 'Delete Device' },
  ];



  //ublic userArr= this.userService.users;

  // Array to store devices and their IPs
  public deviceArr: { ip: string; name: string }[] = [];



  async addUser(): Promise<String>{

    const dataToSend = {
      username: this.userName.value,
      password: this.pass.value
    };

        const response = await fetch(`${this.url}/adduser`, {
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





  async deleteUser(): Promise<String>{

    const dataToSend = {
      username: this.userName.value
    };
        const response = await fetch(`${this.url}/deleteuser`, {
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



  async addDevice(): Promise<String>{

    const dataToSend = {
      name: this.deviceName.value,
      ip: this.IP.value
    };

        const response = await fetch(`${this.url}/adddevice`, {
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


  async deleteDevice(): Promise<String>{

    const dataToSend = {
      name: this.deviceName.value,
      ip: this.IP.value
    };

        const response = await fetch(`${this.url}/deletedevice`, {
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

   //http get request to aria


  // Add a user to the array


}
