import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OutbreakDto } from '../../_models/outbreakDto';
import { OutbreakService } from '../../_services/api/outbreak.service';

@Component({
  selector: 'app-outbreaks',
  templateUrl: './outbreaks.component.html',
  styleUrls: ['./outbreaks.component.scss'],
})
export class OutbreaksComponent implements OnInit, OnDestroy {
  outbreaks: OutbreakDto[] = [];
  subscriptions: Subscription[] = [];

  constructor(private outbreakService: OutbreakService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.outbreakService.getAll(null, null, null, false).subscribe((response: any) => {
        this.outbreaks = response;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
