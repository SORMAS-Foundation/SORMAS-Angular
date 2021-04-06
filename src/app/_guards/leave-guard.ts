import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { TriggerSaveFormService } from '../_services/trigger-save-form.service';

@Injectable({ providedIn: 'root' })
export class LeaveGuard implements CanActivate {
  canLeave = true;

  constructor(private triggerSaveFormService: TriggerSaveFormService ) {
    this.triggerSaveFormService.getInputChange().subscribe((response: any) => {
      this.canLeave = !response.inputChange;
    });
  }

  canActivate(): boolean {
    return this.canLeave;
  }
}
