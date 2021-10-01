import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideNavService {
  sideNavToggleSubject: Subject<any> = new Subject();

  toggle(): void {
    return this.sideNavToggleSubject.next();
  }
}
