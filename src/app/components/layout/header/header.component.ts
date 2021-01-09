import {Component, OnInit} from '@angular/core';
import {faPhone, faShoppingBag, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

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

  constructor(private router: Router, private userService: UserService) {
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
    this.userService.checkIfLoggedIn().subscribe(
      (res) => {
        if (!res) {
          this.router.navigate(['login-register']);
        } else {
          this.router.navigate(['my-profile']);
        }
      }
    );
  }

  navigateToCart() {
    this.router.navigate(['cart']);
  }
}
