import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html'

})
export class LoginComponent {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private service: LoginService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/)])]
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;

  }

}
