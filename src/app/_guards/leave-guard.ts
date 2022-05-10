import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { FormActionsService } from '../_services/form-actions.service';

@Injectable({ providedIn: 'root' })
export class LeaveGuard implements CanDeactivate<any> {
  canLeave = true;

  constructor(private formActionsService: FormActionsService) {
    this.formActionsService.getInputChange().subscribe((response: any) => {
      this.canLeave = !response.inputChange;
    });
  }

  canDeactivate(): boolean {
    return this.canLeave;
  }
}
