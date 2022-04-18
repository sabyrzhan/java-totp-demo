import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private baseUrl: string = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  otpSecret(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/totp-code')
  }

  otpValidate(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/api/totp-validate', data)
  }
}
