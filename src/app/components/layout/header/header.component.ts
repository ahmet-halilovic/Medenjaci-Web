import {Component, OnInit} from '@angular/core';
import {faPhone, faShoppingBag, faUserAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUser = faUserAlt;
  faCart = faShoppingBag;
  faTelephone = faPhone;

  constructor() {
  }

  ngOnInit(): void {
  }

}
