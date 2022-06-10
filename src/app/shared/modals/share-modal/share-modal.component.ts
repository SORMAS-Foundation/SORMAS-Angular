import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { FORM_DATA_CASE_SHARE } from './share-modal-form-data';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.scss'],
})
export class ShareModalComponent implements AfterViewInit, OnDestroy {
  formData = JSON.parse(JSON.stringify(FORM_DATA_CASE_SHARE));
  formId = 'CaseShare';
  subscriptions: Subscription = new Subscription();

  @ViewChild('form') dynamicForm: any;

  ngAfterViewInit(): void {
    const { form } = this.dynamicForm;
    if (!form) {
      return;
    }
    const controlOwnership = form.get('handOverOwnership');
    const controlExcludePersonalData = form.get('pseudonymizePersonalData');
    const controlExcludeSensitiveData = form.get('pseudonymizeSensitiveData');
    const controlShareContacts = form.get('withSamples');
    const controlShareImmunizations = form.get('withImmunizations');

    if (controlOwnership) {
      this.subscriptions.add(
        controlOwnership.valueChanges.pipe(distinctUntilChanged()).subscribe((val: boolean) => {
          if (val === true) {
            controlExcludePersonalData.disable();
            controlExcludeSensitiveData.disable();
            controlShareContacts.disable();
            controlShareImmunizations.disable();
            controlShareContacts.setValue(true);
            controlShareImmunizations.setValue(true);
          }
          if (val === false) {
            controlExcludePersonalData.enable();
            controlExcludeSensitiveData.enable();
            controlShareContacts.enable();
            controlShareImmunizations.enable();
          }
        })
      );
    }

    if (controlExcludePersonalData) {
      this.subscriptions.add(
        controlExcludePersonalData.valueChanges
          .pipe(distinctUntilChanged())
          .subscribe((val: boolean) => {
            if (val === true) {
              controlOwnership.disable();
            }
            if (val === false) {
              controlOwnership.enable();
            }
          })
      );
    }

    if (controlExcludeSensitiveData) {
      this.subscriptions.add(
        controlExcludeSensitiveData.valueChanges
          .pipe(distinctUntilChanged())
          .subscribe((val: boolean) => {
            if (val === true) {
              controlOwnership.disable();
            }
            if (val === false) {
              controlOwnership.enable();
            }
          })
      );
    }
  }

  share(): void {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
