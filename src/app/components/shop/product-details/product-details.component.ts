import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  myForm = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      quantity: ['1', [Validators.min(1), Validators.max(5)]]
    });
  }

  get f() {
    return this.myForm.controls;
  }

  ngOnInit(): void {
  }

}
