import { Component, OnDestroy, OnInit, Optional } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { PersonService } from '../../_services/api/person.service';
import { NotificationService } from '../../_services/notification.service';

@Component({
  selector: 'app-set-missing-geolocation',
  templateUrl: './set-missing-geolocation.component.html',
  styleUrls: ['./set-missing-geolocation.component.scss'],
})
export class SetMissingGeolocationComponent implements OnInit, OnDestroy {
  form: UntypedFormGroup;
  subscription: Subscription = new Subscription();

  constructor(
    @Optional() private dialogRef: MatDialogRef<SetMissingGeolocationComponent>,
    private personService: PersonService,
    private notificationService: NotificationService,
    private translatesService: TranslateService
  ) {}

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      replace: new UntypedFormControl(false),
    });
  }

  continue(): void {
    this.subscription.add(
      this.personService.setMissingCoordinates().subscribe({
        next: (response: any) => {
          this.notificationService.success(
            this.translatesService
              .instant('strings.notificationPersonsUpdated')
              .replace('%d', response.count ?? 0)
          );
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {
          this.dialogRef?.close();
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
