import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactDto } from '../../_models/contactDto';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnDestroy {
  contacts: ContactDto[] = [];
  subscription: Subscription = new Subscription();

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
