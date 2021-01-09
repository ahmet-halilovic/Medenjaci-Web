import {ChosenProduct} from './ChosenProduct';

export class Order {
  id: number;
  totalPrice: number;
  products: ChosenProduct[];
  status: string;
  date: Date;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  phone: string;
  username: string;


  constructor(id: number, totalPrice: number, products: ChosenProduct[], status: string, date: Date, firstName: string, lastName: string, street: string, city: string, phone: string, username: string) {
    this.id = id;
    this.totalPrice = totalPrice;
    this.products = products;
    this.status = status;
    this.date = date;
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
    this.city = city;
    this.phone = phone;
    this.username = username;
  }
}
