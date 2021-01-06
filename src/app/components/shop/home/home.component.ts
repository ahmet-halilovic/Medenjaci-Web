import {Component, OnInit} from '@angular/core';
import {faDollarSign, faPhone, faTruck} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faDelivery = faTruck;
  faPhone = faPhone;
  faPayment = faDollarSign;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToShop() {
    this.router.navigate(['shop']);
  }

}
