import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private BaseUrl:string = 'https://localhost:7055/api/'

  constructor(public httpClient: HttpClient) { }

  loginUser(endpoint: string, data: Object): Observable<any> {
    return this.httpClient.post<any>(this.BaseUrl + endpoint, data);
  }

  registerUser(endpoint: string, data: Object): Observable<any> {
    return this.httpClient.post<any>(this.BaseUrl + endpoint, data);
  }

  forgotPassword(endpoint: string, data: Object): Observable<any> {
    return this.httpClient.post<any>(this.BaseUrl + endpoint, data); 
  }

  resetPassword(endpoint: string, data: Object): Observable<any> {
    return this.httpClient.post<any>(this.BaseUrl + endpoint, data);
  }

}
