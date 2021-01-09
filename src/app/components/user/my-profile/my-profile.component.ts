import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/User';
import {Router} from '@angular/router';
import {Order} from '../../../models/Order';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  activeContent: string = 'Narudžbine';
  user: User = new User('', '', '', '', '', '', '', '');
  orders: Order[] = [];
  // @ts-ignore
  infoForm: FormGroup;
  // @ts-ignore
  changePasswordForm: FormGroup;

  showOrder: boolean = false;
  chosenOrder: any;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService, private orderService: OrderService) {
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
    this.getOrders();
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

  reformatDate(date: Date) {
    let month = '';

    switch (date.getMonth()) {
      case 0:
        month = 'Januar';
        break;
      case 1:
        month = 'Februar';
        break;
      case 2:
        month = 'Mart';
        break;
      case 3:
        month = 'April';
        break;
      case 4:
        month = 'Maj';
        break;
      case 5:
        month = 'Jun';
        break;
      case 6:
        month = 'Jul';
        break;
      case 7:
        month = 'Avgust';
        break;
      case 8:
        month = 'Septembar';
        break;
      case 9:
        month = 'Oktobar';
        break;
      case 10:
        month = 'Novembar';
        break;
      case 11:
        month = 'Decembar';
        break;
      default:
        month = '';
        break;
    }

    return `${date.getDate()}. ${month} ${date.getFullYear()}.`;
  }

  getLoggedUser() {
    let result = this.userService.getLoggedUser();

    this.user = result;
    this.fillForm();
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

  getOrders() {
    this.orderService.listUsersOrders(this.user.username).subscribe(
      (res) => {
        this.orders = res;
      }
    );
  }

  setShowOrder(active: boolean, order: any) {
    this.showOrder = active;
    this.chosenOrder = order;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
