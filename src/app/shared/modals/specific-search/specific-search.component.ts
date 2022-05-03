import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CONFIGURATION_MODAL_WIDTH, CUSTOM_SEARCH_ID } from '../../../app.constants';
import { CaseService } from '../../../_services/api/case.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { NotificationService } from '../../../_services/notification.service';
import { FormBase } from '../../dynamic-form/types/form-element-base';
import { SpecificSearchFoundComponent } from '../specific-search-found/specific-search-found.component';
import { FORM_DATA_SPECIFIC_SEARCH } from './specific-search-form-data';

@Component({
  selector: 'app-specific-search',
  templateUrl: './specific-search.component.html',
  styleUrls: ['./specific-search.component.scss'],
})
export class SpecificSearchComponent implements OnInit {
  myFormElements: FormBase<any>[] = [];
  updatedResource: any;
  modalWidth: string;
  formId = CUSTOM_SEARCH_ID;
  subscriptions: Subscription[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SpecificSearchComponent>,
    private caseService: CaseService,
    public breakpointObserver: BreakpointObserver,
    private formElementControlService: FormElementControlService,
    private notificationService: NotificationService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.data.resource) {
      this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
        this.data.resource,
        JSON.parse(JSON.stringify(FORM_DATA_SPECIFIC_SEARCH))
      );
    } else {
      this.myFormElements = JSON.parse(JSON.stringify(FORM_DATA_SPECIFIC_SEARCH));
    }
  }

  updateValues(values: any): void {
    this.updatedResource = values;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    Object.keys(this.updatedResource).forEach(
      (key) => this.updatedResource[key] === undefined && delete this.updatedResource[key]
    );
    if (this.updatedResource?.uuid) {
      const filters = [
        {
          field: 'specificId',
          value: this.updatedResource.uuid,
        },
      ];
      this.subscriptions.push(
        this.caseService.getAll(null, null, filters, false).subscribe({
          next: (response: any) => {
            if (response.elements.length === 1) {
              this.dialog.open(SpecificSearchFoundComponent, {
                width: CONFIGURATION_MODAL_WIDTH,
                data: {},
              });
              this.router.navigate([`/cases/case/${response.elements[0].uuid}/details`]);
            }
          },
          error: (err: any) => {
            this.notificationService.error(err);
          },
          complete: () => {},
        })
      );
    }
    this.dialogRef.close({
      resource: this.updatedResource,
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
