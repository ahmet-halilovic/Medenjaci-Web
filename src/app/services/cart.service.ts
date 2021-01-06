import {Injectable} from '@angular/core';
import {ChosenProduct} from '../models/ChosenProduct';
import {Product} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: ChosenProduct[] = [];

  constructor() {
  }

  getProducts(): ChosenProduct[] {
    return this.products;
  }

  addToCart(product: ChosenProduct) {
    let index = this.products.findIndex((obj) => obj.id === product.id);

    if (index >= 0) {
      this.products[index].quantity += product.quantity;
    } else {
      this.products.push(product);
    }

    console.log(this.products);
  }

  removeFromCart(product: ChosenProduct) {
    let index = this.products.indexOf(product);
    this.products.splice(index, 1);

    return this.products;
  }

  clearCart() {
    this.products = [];

    return this.products;
  }
}
