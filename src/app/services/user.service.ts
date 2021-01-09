import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {USERS} from '../data/users';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = USERS;
  loggedUser = new User('', '', '', '', '', '', '', '');

  constructor() {
  }

  getLoggedUser() {
    return this.loggedUser;
  }

  checkIfLoggedIn(): Observable<boolean> {
    const checkToken = localStorage.getItem('username');

    if (checkToken) {
      const byUsername = this.users.find(u => u.username === checkToken);

      // @ts-ignore
      this.loggedUser = byUsername;

      return of(true);
    }

    return of(false);
  }

  logout() {
    this.loggedUser = new User('', '', '', '', '', '', '', '');
    localStorage.removeItem('username');
  }

  login(username: string, password: string, rememberMe: boolean): Observable<string> {
    const byUsername = this.users.find(u => u.username === username);

    if (!byUsername) {
      return of('User with that username doesn\'t exist');
    }

    if (byUsername.password !== password) {
      return of('Wrong password');
    }

    localStorage.setItem('username', username);
    this.loggedUser = byUsername;

    return of('Success');
  }

  register(user: User): Observable<string[]> {
    let byUsername = this.users.filter((element) => {
      return element.username === user.username;
    })[0];
    let byEmail = this.users.filter((element) => {
      return element.email === user.email;
    })[0];

    let errors = [];

    if (byUsername) {
      errors.push('User with that username already exists');
    }

    if (byEmail) {
      errors.push('User with that email address already exists');
    }

    if (errors.length > 0) {
      return of(errors);
    }

    this.users.push(new User(user.username, user.password, user.email, user.firstName, user.lastName, user.street, user.city, user.phone));
    return of(['Success']);
  }

  changePersonalInfo(user: User): Observable<User> {
    let result;

    this.users.forEach((u) => {
      if (u.username === user.username) {
        console.log('da');
        u.firstName = user.firstName;
        u.lastName = user.lastName;
        u.street = user.street;
        u.city = user.city;
        u.phone = user.phone;

        result = u;
      }
    });
    // @ts-ignore
    return of(result);
  }

  changePassword(user: User, newPassword: string): Observable<User> {
    let result;

    this.users.forEach((u) => {
      if (u.username === user.username && u.password === user.password) {
        u.password = newPassword;

        result = u;
      }
    });

    // @ts-ignore
    return of(result);
  }
}
