import { Component, OnDestroy } from '@angular/core';
import { ContactDto } from 'api-client';
import { Subscription } from 'rxjs';

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
