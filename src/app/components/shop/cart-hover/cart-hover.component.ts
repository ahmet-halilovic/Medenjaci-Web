import {Component, OnInit} from '@angular/core';
import {ChosenProduct} from '../../../models/ChosenProduct';
import {CartService} from '../../../services/cart.service';
import {faShoppingCart, faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-hover',
  templateUrl: './cart-hover.component.html',
  styleUrls: ['./cart-hover.component.css']
})
export class CartHoverComponent implements OnInit {
  faCart = faShoppingCart;
  faTrash = faTrash;

  products: ChosenProduct[] = [];
  recentlyAddedProducts: ChosenProduct[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();

    this.recentlyAddedProductsHandler();
  }

  recentlyAddedProductsHandler() {
    if (this.products.length < 3) {
      this.recentlyAddedProducts = this.products;
    } else if (this.products.length >= 1) {
      this.recentlyAddedProducts = [];
      this.recentlyAddedProducts.push(this.products[this.products.length - 1]);
      this.recentlyAddedProducts.push(this.products[this.products.length - 2]);
      this.recentlyAddedProducts.push(this.products[this.products.length - 3]);
    } else {
      this.recentlyAddedProducts = [];
    }
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
