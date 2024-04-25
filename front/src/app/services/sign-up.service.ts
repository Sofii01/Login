import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { SignUpResponse } from '../models/signup-response.model';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  signup(userName: String, email:String, password:String): Observable<SignUpResponse>{
    return this.http.post<SignUpResponse>('http://localhost:4001/users/createNewUser', {userName, email,password}).pipe(
      catchError(error => {
        let errorMessage = error.error;
        const errorResponse: SignUpResponse = { message: errorMessage };
    
        console.error('Error en la solicitud de registro:', error);
        return throwError(errorMessage);
      })
    )
  }
}
