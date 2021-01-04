import {Injectable} from '@angular/core';
import {PRODUCTS} from '../data/products';
import {Observable, of} from 'rxjs';
import {Product} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = PRODUCTS;

  constructor() {
  }

  list(): Observable<Product[]> {
    return of(this.products);
  }

  listById(id: number | undefined): Observable<Product> {
    const product = this.products.filter((product) => {
      return product.id === id;
    })[0];

    return of(product);
  }
}
