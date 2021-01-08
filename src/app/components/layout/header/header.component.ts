import {Component, OnInit} from '@angular/core';
import {faPhone, faShoppingBag, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUser = faUserAlt;
  faCart = faShoppingBag;
  faTelephone = faPhone;

  cartActive: boolean = false;

  activePage: string = 'home';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  setActivePage(page: string) {
    this.activePage = page;
  }

  setCartActive(active: boolean) {
    this.cartActive = active;
  }

  navigateToLoginRegister() {
    this.router.navigate(['login-register']);
  }

  navigateToCart() {
    this.router.navigate(['cart']);
  }
}
