import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {UntypedFormBuilder, UntypedFormGroup} from
'@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: UntypedFormGroup;
  usuarioCtrl = new UntypedFormControl('');
  passwordCtrl = new UntypedFormControl('');

  // const usuario = this.form.get('usuario');
  // if(usuario) {
  //   usuario.valueChanges.subscribe();
  //   usuario.getRawValue();
  // }
  constructor(
    private uFormBuilder: UntypedFormBuilder,
   
  ) {
    this.form = this.uFormBuilder.group({
      usuario: this.usuarioCtrl,
      pass: this.passwordCtrl,
    });
  }
}
