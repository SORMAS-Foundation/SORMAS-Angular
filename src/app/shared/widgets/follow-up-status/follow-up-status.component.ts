import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-follow-up-status',
  templateUrl: './follow-up-status.component.html',
  styleUrls: ['./follow-up-status.component.scss'],
})
export class FollowUpStatusComponent {
  config: FormElementBase<string>;
  group: FormGroup;

  canResume(): boolean {
    const status = this.group?.value?.followUpStatus;
    if (!status) {
      return true;
    }
    return ['NO_FOLLOW_UP', 'CANCELED', 'LOST'].includes(status);
  }

  canCancel(): boolean {
    const status = this.group?.value?.followUpStatus;
    return status === 'FOLLOW_UP';
  }

  canLost(): boolean {
    const status = this.group?.value?.followUpStatus;
    return status === 'FOLLOW_UP';
  }

  resumeFollowUp(): void {
    this.group.patchValue({ followUpStatus: 'FOLLOW_UP' });
  }

  cancelFollowUp(): void {
    this.group.patchValue({ followUpStatus: 'CANCELED' });
  }

  lostFollowUp(): void {
    this.group.patchValue({ followUpStatus: 'LOST' });
  }
}
