import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-follow-up-status',
  templateUrl: './follow-up-status.component.html',
  styleUrls: ['./follow-up-status.component.scss'],
})
export class FollowUpStatusComponent implements OnInit, OnDestroy {
  config: FormElementBase<string>;
  group: FormGroup;
  control: any;

  status: string;
  activeFollowUp = false;
  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.control = this.group?.get(this.config.key);
    if (this.control) {
      this.updateStatus(this.control.value);
      this.subscriptions.push(
        this.control.valueChanges.subscribe((val: string) => this.updateStatus(val))
      );
    }
  }

  updateStatus(status: string): void {
    this.status = status;
    this.activeFollowUp = status === 'FOLLOW_UP';
  }

  resumeFollowUp(): void {
    this.control?.setValue('FOLLOW_UP');
  }

  cancelFollowUp(): void {
    this.control?.setValue('CANCELED');
  }

  lostFollowUp(): void {
    this.control?.setValue('LOST');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
