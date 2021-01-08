import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/User';

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

  user: User = new User('', '', '', '', '', '', '', '');

  constructor(private fb: FormBuilder, private userService: UserService) {
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
    return this.registerForm.get('passwordGroup') as FormGroup;
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
    this.user.username = this.username?.value;
    this.user.password = this.password?.value;

    this.userService.login(this.user.username, this.user.password, false).subscribe(
      (res) => {
        if (res === 'Success') {
          console.log('ulogovan');
        } else if (res === 'Wrong password') {
          this.loginForm.controls['password'].setErrors({incorrect: true});
        } else if (res === 'User with that username doesn\'t exist') {
          this.loginForm.controls['username'].setErrors({incorrect: true});
        }
      }
    );
  }

  register() {
    this.user.firstName = this.firstName?.value;
    this.user.lastName = this.lastName?.value;
    this.user.username = this.registerUsername?.value;
    this.user.email = this.email?.value;
    this.user.password = this.registerPassword?.value;
    this.user.street = this.street?.value;
    this.user.city = this.city?.value;
    this.user.phone = this.phone?.value;

    this.userService.register(this.user).subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i] === 'Success') {
          console.log('Success');
        } else if (res[i] === 'User with that username already exists') {
          this.registerForm.controls['registerUsername'].setErrors({incorrect: true});
        } else if (res[i] === 'User with that email address already exists') {
          this.registerForm.controls['email'].setErrors({incorrect: true});
        }
      }
    });
  }

}
