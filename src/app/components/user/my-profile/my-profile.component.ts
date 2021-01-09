import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  activeContent: string = 'Lični podaci';

  // @ts-ignore
  infoForm: FormGroup;
  // @ts-ignore
  changePasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
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

}
