import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { LoginResponse } from '../models/login-response.model';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(userName: String, password: String) : Observable<LoginResponse>{
    return this.http.post<LoginResponse>('http://localhost:4001/users/login', { userName, password }).pipe(
      tap((response) => {
        response.token = 'aquí_puedes_asignar_el_token_recibido_del_backend';
      }),
      catchError((error) => {
        let errorMessage = error.error.msg

        const errorResponse : LoginResponse = {token: '' ,message:errorMessage}
        console.error('Error en la solicitud HTTP:', error);
        return throwError(errorMessage);
      })
    )
  }
}
