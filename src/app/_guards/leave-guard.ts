import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { FormActionsService } from '../_services/form-actions.service';

@Injectable({ providedIn: 'root' })
export class LeaveGuard implements CanActivate {
  canLeave = true;

  constructor(private formActionsService: FormActionsService) {
    this.formActionsService.getInputChange().subscribe((response: any) => {
      this.canLeave = !response.inputChange;
    });
  }

  canActivate(): boolean {
    return this.canLeave;
  }
}
