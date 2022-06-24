import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FOLLOW_UP_STATUS } from '../../../app.constants';
import { FormActionsService } from '../../../_services/form-actions.service';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-follow-up-status',
  templateUrl: './follow-up-status.component.html',
  styleUrls: ['./follow-up-status.component.scss'],
})
export class FollowUpStatusComponent implements OnInit, OnDestroy {
  config: FormElementBase<string>;
  group: UntypedFormGroup;
  formId: string;
  control: any;

  followUpStatus = FOLLOW_UP_STATUS;
  status: string;
  activeFollowUp = false;
  subscriptions: Subscription[] = [];

  constructor(private formActionsService: FormActionsService) {}

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
    this.activeFollowUp = status === this.followUpStatus.FOLLOW_UP;
  }

  setStatus(status: string): void {
    this.control?.setValue(status);
    this.formActionsService.setInputChange(this.formId, this.config.key, true);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
