import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../../models/Order';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {
  // @ts-ignore
  @Input() order: Order;

  constructor() {
  }

  ngOnInit(): void {
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

  getTotalPrice() {
    let sum = 0;
    this.order.products.forEach((element) => {
      sum += element.price * element.quantity;
    });

    return sum.toString();
  }
}
