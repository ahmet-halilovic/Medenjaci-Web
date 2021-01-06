import {Injectable} from '@angular/core';
import {ChosenProduct} from '../models/ChosenProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: ChosenProduct[] = [];

  constructor() {
    // let ch = new ChosenProduct(new Product(
    //   1,
    //   'Livadski med',
    //   999,
    //   'https://lh3.googleusercontent.com/proxy/aMsZs3VzCUF2aK8_x9c77sFQ9dEtf7B50NYYsyzV9McT7n5RiKwblYTC8u641-0jKXKAo_GEjm80UvyiED2IyL4HtQaNN7yQsyAD6TZLox4MWfCOEH_HiAxHmYJg',
    //   'Domaci livadski med.',
    //   'Koristiti svako jutro uz caj.',
    //   'Med'), 2);
    //
    // let ch1 = new ChosenProduct(new Product(
    //   2,
    //   'Livadski med',
    //   999,
    //   'https://lh3.googleusercontent.com/proxy/aMsZs3VzCUF2aK8_x9c77sFQ9dEtf7B50NYYsyzV9McT7n5RiKwblYTC8u641-0jKXKAo_GEjm80UvyiED2IyL4HtQaNN7yQsyAD6TZLox4MWfCOEH_HiAxHmYJg',
    //   'Domaci livadski med.',
    //   'Koristiti svako jutro uz caj.',
    //   'Med'), 2);
    //
    // this.products.push(ch, ch1);
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
