import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {LoginServiceService } from '../services/login-service.service';
import { Subscription, timer } from 'rxjs';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  showSuccessMessage = false;
  showErrorMessage = false;
  errorMessage = '';
  showPassword = false;
  
  constructor(
    private fb: FormBuilder,
    private loginService: LoginServiceService
  ) {
    this.form = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const userName = this.form.get('userName')?.value;
    const password = this.form.get('password')?.value;

    this.loginService.login(userName, password).subscribe(
      response => {
        console.log(response);
        this.showSuccessMessage = true;
    
      },
      error => {
        this.errorMessage = error
        console.log(this.errorMessage)
        this.showErrorMessage = true
      }
    )
    


  }

}
