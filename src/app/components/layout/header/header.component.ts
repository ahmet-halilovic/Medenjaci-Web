import {Component, OnInit} from '@angular/core';
import {faPhone, faShoppingBag, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import {NavigationService} from '../../../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUser = faUserAlt;
  faCart = faShoppingBag;
  faTelephone = faPhone;

  activePage: string = 'home';

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.getActivePage();
  }

  getActivePage() {
    this.navigationService.getActivePage().subscribe((res) => {
        this.activePage = res;
      }
    );
  }

  setActivePage(page: string) {
    this.navigationService.setActivePage(page).subscribe((res) => {
      this.activePage = res;
    });
  }

}
