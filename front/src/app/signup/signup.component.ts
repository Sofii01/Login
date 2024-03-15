import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl, Validators } from '@angular/forms';
'@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],      
      password: ['',[Validators.required, Validators.minLength(8)]]

    })
  }

  get userName(){
    return this.form.controls['userName'];
  }
  sendValues(){
    console.log(this.form.value)
  }
}
