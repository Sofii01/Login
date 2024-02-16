import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl, Validators } from '@angular/forms';
'@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      password: ['',[Validators.required, Validators.minLength(8)]]
    })
  }
  sendValues(){
    console.log(this.form.value)
  }

}
