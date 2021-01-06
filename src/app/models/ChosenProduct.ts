import {Product} from './Product';

export class ChosenProduct extends Product {
  quantity: number;

  constructor(product: Product, quantity: number) {
    super(product.id, product.name, product.price, product.picture, product.description, product.manual, product.category);
    this.quantity = quantity;
  }
}
