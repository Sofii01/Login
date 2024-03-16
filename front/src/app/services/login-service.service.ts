import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(userName: String, password: String){
    return this.http.post<any>('http://localhost:4001/users/login', { userName, password });
  }
}
