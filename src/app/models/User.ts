export class User {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  phone: string;


  constructor(username: string, password: string, email: string, firstName: string, lastName: string, street: string, city: string, phone: string) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
    this.city = city;
    this.phone = phone;
  }
}
