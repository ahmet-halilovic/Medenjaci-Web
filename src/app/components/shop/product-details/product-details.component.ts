import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../../models/Product';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  myForm = new FormGroup({});

  productId: number = 0;
  product: Product = new Product(0, '', 0, '', '', '', '');

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private productService: ProductService) {
    this.myForm = formBuilder.group({
      quantity: ['1', [Validators.min(1), Validators.max(5)]]
    });

    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      this.productId = parseInt(params.get('productId').toString());
    });

    this.getProduct();
  }

  get f() {
    return this.myForm.controls;
  }

  ngOnInit(): void {
  }

  getProduct() {
    this.productService.listById(this.productId).subscribe(
      (res) => {
        this.product = res;
      },
    );
  }

}
