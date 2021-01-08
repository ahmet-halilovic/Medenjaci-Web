import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  // @ts-ignore
  loginForm: FormGroup;
  // @ts-ignore
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      registerUsername: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      passwordGroup: this.fb.group({
        registerPassword: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      }, {validator: this.passwordMatchValidator}),
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.controls['registerPassword'].value === formGroup.controls['confirmPassword'].value
      ? null
      : {misMatch: true};
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get registerUsername() {
    return this.registerForm.get('registerUsername');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get passwordGroup() {
    return this.registerForm.get('passwordGroup');
  }

  get registerPassword() {
    return this.registerForm.get('passwordGroup.registerPassword');
  }

  get confirmPassword() {
    return this.registerForm.get('passwordGroup.confirmPassword');
  }

  get street() {
    return this.registerForm.get('street');
  }

  get city() {
    return this.registerForm.get('city');
  }

  get phone() {
    return this.registerForm.get('phone');
  }


  login() {

  }

}
