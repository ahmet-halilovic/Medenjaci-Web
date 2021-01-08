import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {USERS} from '../data/users';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = USERS;

  constructor() {
  }

  login(username: string, password: string, rememberMe: boolean): Observable<string> {
    const byUsername = this.users.find(u => u.username === username);

    if (!byUsername) {
      return of('User with that username doesn\'t exist');
    }

    if (byUsername.password !== password) {
      return of('Wrong password');
    }

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
}
