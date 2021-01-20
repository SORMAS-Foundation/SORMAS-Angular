import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactDto } from 'api-client';
import { Subscription } from 'rxjs';
import { DiseaseService } from '../../services/disease.service';
import { ApiError } from '../../shared/http/BaseDataService';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit, OnDestroy {
  contacts: ContactDto[] = [];
  errorMessage?: ApiError;
  subscription: Subscription = new Subscription();

  constructor(private diseaseService: DiseaseService) {}

  ngOnInit(): void {
    this.subscription = this.diseaseService.getContactsData().subscribe({
      next: (contacts) => {
        this.contacts = contacts;
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
