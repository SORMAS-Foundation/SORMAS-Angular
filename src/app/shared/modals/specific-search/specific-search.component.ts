import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import {
  CONFIGURATION_MODAL_WIDTH,
  CUSTOM_SEARCH_ID,
  SPECIFIC_SEARCH_TYPE,
} from '../../../app.constants';
import { CaseService } from '../../../_services/api/case.service';
import { EventService } from '../../../_services/api/event.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { NotificationService } from '../../../_services/notification.service';
import { FormBase } from '../../dynamic-form/types/form-element-base';
import { SpecificSearchNotFoundComponent } from '../specific-search-not-found/specific-search-not-found.component';
import { FORM_DATA_SPECIFIC_SEARCH } from './specific-search-form-data';

@Component({
  selector: 'app-specific-search',
  templateUrl: './specific-search.component.html',
  styleUrls: ['./specific-search.component.scss'],
})
export class SpecificSearchComponent implements OnInit, OnDestroy {
  myFormElements: FormBase<any>[] = [];
  updatedResource: any;
  modalWidth: string;
  formId = CUSTOM_SEARCH_ID;
  subscriptions: Subscription[] = [];
  type =
    this.data.type === SPECIFIC_SEARCH_TYPE.CASE_SPECIFIC_SEARCH
      ? SPECIFIC_SEARCH_TYPE.CASE_SPECIFIC_SEARCH.slice(0, -1)
      : SPECIFIC_SEARCH_TYPE.EVENT_SPECIFIC_SEARCH.slice(0, -1);
  infoSpecificSearch = `strings.infoSpecific${this.type}Search`;
  searchText = `captions.${this.type.toLowerCase()}Search${this.type}`;
  searchSpecific = `captions.${this.type.toLowerCase()}SearchSpecific${this.type}`;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SpecificSearchComponent>,
    private caseService: CaseService,
    private eventService: EventService,
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

  caseNotFound(): void {
    this.dialog.open(SpecificSearchNotFoundComponent, {
      width: CONFIGURATION_MODAL_WIDTH,
      data: { type: this.data.type },
    });
  }

  save(): void {
    const currentService =
      this.data.type === SPECIFIC_SEARCH_TYPE.CASE_SPECIFIC_SEARCH
        ? this.caseService
        : this.eventService;
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
        currentService.searchSpecific(filters).subscribe({
          next: (response: any) => {
            if (response.elements.length === 1) {
              this.router.navigate([
                `/${this.data.type}/${this.data.type.slice(0, -1).toLowerCase()}/${
                  response.elements[0].uuid
                }/details`,
              ]);
            } else {
              this.caseNotFound();
            }
          },
          error: (err: any) => {
            this.caseNotFound();
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
