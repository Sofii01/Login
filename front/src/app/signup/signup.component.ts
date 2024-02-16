import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl, Validators } from '@angular/forms';
'@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
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
