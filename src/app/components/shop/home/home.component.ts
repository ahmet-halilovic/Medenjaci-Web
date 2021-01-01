import {Component, OnInit} from '@angular/core';
import {faDollarSign, faPhone, faTruck} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faDelivery = faTruck;
  faPhone = faPhone;
  faPayment = faDollarSign;

  constructor() {
  }

  ngOnInit(): void {
  }

}
