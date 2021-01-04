import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  activePage: string = 'home';

  constructor() {
  }

  getActivePage(): Observable<string> {
    return of(this.activePage);
  }

  setActivePage(page: string): Observable<string> {
    this.activePage = page;

    return of(page);
  }
}
