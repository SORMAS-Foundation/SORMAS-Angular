import { Component, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { FormGroup } from '@angular/forms';
import { HelperApiService } from '../../../_services/api/helper-api.service';
import { FormElementBase } from "../../dynamic-form/types/form-element-base";
import { NotificationService } from "../../../_services/notification.service";

@Component({
  selector: 'app-address-button',
  templateUrl: './address-button.component.html',
  styleUrls: ['./address-button.component.scss'],
})
export class AddressButtonComponent implements OnDestroy {
  subscription: Subscription = new Subscription();
  config: FormElementBase<any>;
  group: FormGroup;

  constructor(
    private helperApiService: HelperApiService,
    private notificationService: NotificationService
  ) {}

  getLatLng(): void {
    this.subscription.add(
      this.helperApiService.getLatLng(this.group.value.location__city, this.group.value.location__street).subscribe({
          next: (response: any) => {
            // eslint-disable-next-line no-console
            console.log('response', response);
          },
          error: (err: any) => {
            this.notificationService.error(err);
          },
          complete: () => {},
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
