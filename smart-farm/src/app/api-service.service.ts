import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl = 'http://127.0.0.1:5000/submit';

  constructor(private http: HttpClient) {}

  // Method to send form data to the server
  sendFormData(deviceIp: string, flashCode: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { deviceIp, flashCode };

    return this.http.post<any>(this.apiUrl, body, { headers });

    
  }

  }
