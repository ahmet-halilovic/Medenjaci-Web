import {Component, OnInit} from '@angular/core';
import {faShoppingCart, faTrash} from '@fortawesome/free-solid-svg-icons';
import {CartService} from '../../../services/cart.service';
import {ChosenProduct} from '../../../models/ChosenProduct';

@Component({
  selector: 'app-full-page-cart',
  templateUrl: './full-page-cart.component.html',
  styleUrls: ['./full-page-cart.component.css']
})
export class FullPageCartComponent implements OnInit {
  faCart = faShoppingCart;
  faTrash = faTrash;

  products: ChosenProduct[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }

  getTotalQuantity() {
    let sum = 0;
    this.products.forEach((element) => {
      sum += element.quantity;
    });

    return sum.toString();
  }

  getTotalPrice() {
    let sum = 0;
    this.products.forEach((element) => {
      sum += element.price * element.quantity;
    });

    return sum.toString();
  }

  deleteOnChange(event: any, product: ChosenProduct) {
    if (event.target.value === '0') {
      this.deleteProduct(product);
    }
  }

  deleteProduct(product: ChosenProduct) {
    this.products = this.cartService.removeFromCart(product);
  }

  emptyCart() {
    this.products = this.cartService.clearCart();
  }
}
