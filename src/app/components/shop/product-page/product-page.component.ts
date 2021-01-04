import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products: Product[] = [];

  filter: string = 'Svi proizvodi';
  filteredProducts: Product[] = [];

  searchCriteria: string = '';

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  setFilter(filter: string) {
    this.filter = filter;

    if (filter === 'Svi proizvodi') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((product) => {
        return product.category === filter;
      });
    }
  }

  productSearch() {
    if (this.searchCriteria !== '') {
      this.filteredProducts = this.filteredProducts.filter((product) => {
        return (
          product.name.toLocaleLowerCase().match(this.searchCriteria.toLocaleLowerCase()) ||
          product.description.toLocaleLowerCase().match(this.searchCriteria.toLocaleLowerCase()) ||
          product.manual.toLocaleLowerCase().match(this.searchCriteria.toLocaleLowerCase())
        );
      });
    } else {
      this.setFilter(this.filter);
    }
  }

  getProducts(): void {
    this.productService
      .list()
      .subscribe(
        (res: Product[]) => {
          this.products = res;
          this.filteredProducts = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
