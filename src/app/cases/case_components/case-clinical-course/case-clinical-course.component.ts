import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import * as data from './case-clinical-course-form-data';
import { CaseDataDto } from '../../../_models/caseDataDto';
import { BaseService } from '../../../_services/api/base.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { TableColumn } from '../../../_models/common';
import { defaultColumnDefs } from './case-clinical-course-table-data';
import { ClinicalVisitDto } from '../../../_models/clinicalVisitDto';
import { ClinicalVisitService } from '../../../_services/api/clinical-visit.service';
import {
  ADD_MODAL_MAX_WIDTH,
  CASE_CLINICAL_COURSE_FORM_ID,
  TableAppearanceOptions,
} from '../../../app.constants';
import { AddEditBaseModalComponent } from '../../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { ClinicalCourseAddComponent } from '../clinical-course-add/clinical-course-add.component';

@Component({
  selector: 'app-case-clinical-course',
  templateUrl: './case-clinical-course.component.html',
  styleUrls: ['./case-clinical-course.component.scss'],
})
export class CaseClinicalCourseComponent implements OnDestroy {
  clinicalAssessments: ClinicalVisitDto[] = [];
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_CASE_CLINICAL_COURSE;
  defaultColumns: TableColumn[] = defaultColumnDefs;
  tableAppearanceOptions = TableAppearanceOptions;
  formId = CASE_CLINICAL_COURSE_FORM_ID;

  public resourceService: BaseService<any>;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private formElementControlService: FormElementControlService,
    public clinicalVisitService: ClinicalVisitService,
    private translateService: TranslateService,
    private dialog: MatDialog
  ) {}

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    this.resourceService = resourceService;
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      caseItem,
      this.formData
    );
  }

  openAddClinicalCourseModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('strings.headingCreateNewClinicalVisit'),
        component: ClinicalCourseAddComponent,
      },
    });

    this.subscriptions.add(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
