import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactDto } from 'api-client';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit, OnDestroy {
  contacts: ContactDto[] = [];
  subscription: Subscription = new Subscription();

  constructor() {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
