import {Component, OnInit} from '@angular/core';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faTelephone = faPhone;

  constructor() {
  }

  ngOnInit(): void {
  }

}
