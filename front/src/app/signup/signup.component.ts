import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl, Validators } from '@angular/forms';
'@angular/forms';
import { SignUpService } from '../services/sign-up.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form: FormGroup;
  showSuccessMessage = false;
  showErrorMessage = false;
  errorMessage = '';
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private signupService: SignUpService
  ){
    this.form = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      confirmPassword:['', [Validators.required, Validators.minLength(8)]],
      password: ['',[Validators.required, Validators.minLength(8)]]
    }, { validators: this.passwordMatchValidator })
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  //verifica que las contraseñas sean iguales
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else if (confirmPassword) {
      confirmPassword.setErrors(null);
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const userName = this.form.get('userName')?.value;
    const password = this.form.get('password')?.value;
    const email = this.form.get('email')?.value;

    this.signupService.signup(userName, email,password).subscribe(
      response => {
        console.log(response);
        this.showSuccessMessage = true;
      },
      error =>{
        console.log(error);
        this.errorMessage = error.msg;
        this.showErrorMessage = true;
      }
    );
    

  
  }

}
