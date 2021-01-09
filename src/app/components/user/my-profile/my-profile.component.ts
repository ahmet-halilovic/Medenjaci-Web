import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  activeContent: string = 'Lični podaci';
  user: User = new User('', '', '', '', '', '', '', '');

  // @ts-ignore
  infoForm: FormGroup;
  // @ts-ignore
  changePasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.infoForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });

    this.changePasswordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPasswordGroup: this.fb.group({
        newPassword: ['', [Validators.required]],
        confirmNewPassword: ['', [Validators.required]]
      }, {validator: this.passwordMatchValidator}),
    });

    this.getLoggedUser();

  }

  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.controls['newPassword'].value === formGroup.controls['confirmNewPassword'].value
      ? null
      : {misMatch: true};
  }

  get firstName() {
    return this.infoForm.get('firstName');
  }

  get lastName() {
    return this.infoForm.get('lastName');
  }

  get street() {
    return this.infoForm.get('street');
  }

  get city() {
    return this.infoForm.get('city');
  }

  get phone() {
    return this.infoForm.get('phone');
  }

  get currentPassword() {
    return this.changePasswordForm.get('currentPassword');
  }

  get newPasswordGroup() {
    return this.changePasswordForm.get('newPasswordGroup') as FormGroup;
  }

  get newPassword() {
    return this.changePasswordForm.get('newPasswordGroup.newPassword');
  }

  get confirmNewPassword() {
    return this.changePasswordForm.get('newPasswordGroup.confirmNewPassword');
  }

  setActiveContent(content: string) {
    this.activeContent = content;
  }

  getLoggedUser() {
    this.userService.getLoggedUser().subscribe((res) => {
      this.user = res;
      this.fillForm();
    });
  }

  fillForm() {
    this.firstName?.setValue(this.user.firstName);
    this.lastName?.setValue(this.user.lastName);
    this.street?.setValue(this.user.street);
    this.city?.setValue(this.user.city);
    this.phone?.setValue(this.user.phone);
  }

  changePersonalInfo() {
    const updatedUser = new User(this.user.username, this.user.password, this.user.email, this.firstName?.value, this.lastName?.value, this.street?.value, this.city?.value, this.phone?.value);

    this.userService.changePersonalInfo(updatedUser).subscribe((res) => {
      this.user = res;
    });
  }

  changePassword() {
    const updatedUser = new User(this.user.username, this.currentPassword?.value, this.user.email, this.user.firstName, this.user.lastName, this.user.street, this.user.city, this.user.phone);

    this.userService.changePassword(updatedUser, this.newPassword?.value).subscribe((res) => {
      if (res == undefined) {
        this.changePasswordForm.controls['currentPassword'].setErrors({incorrect: true});
      } else {
        this.user = res;
      }
    });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
