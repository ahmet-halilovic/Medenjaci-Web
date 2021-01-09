import {Injectable} from '@angular/core';
import {ORDERS} from '../data/orders';
import {Order} from '../models/Order';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders = ORDERS;

  constructor() {
  }

  createOrder(order: Order): Observable<boolean> {
    this.orders.push(order);

    return of(true);
  }

  listUsersOrders(username: string): Observable<Order[]> {
    const byUsername = this.orders.filter((o) => {
      return o.username === username;
    });

    return of(byUsername);
  }
}
