import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/Product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = new Product(0, '', 0, '', '', '', '');

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToProductDetails(): void {
    // @ts-ignore
    this.router.navigate(['shop', 'product', this.product.id]);
  }

}
