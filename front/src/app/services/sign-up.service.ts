import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  signup(userName: String, email:String, password:String){
    return this.http.post<any>('http://localhost:4001/users/createNewUser', {userName, email,password})
  }
}
