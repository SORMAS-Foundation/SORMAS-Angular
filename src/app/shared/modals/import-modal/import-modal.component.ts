import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ACTIONS_CASE } from '../../../app.constants';

@Component({
  selector: 'app-import-modal',
  templateUrl: './import-modal.component.html',
  styleUrls: ['./import-modal.component.scss'],
})
export class ImportModalComponent implements OnInit, OnDestroy {
  @Input() showStepGuide = true;
  @Input() showStepTemplate = true;
  @Input() showStepError = true;
  @Input() selectDate = false;
  @Input() selectSeparator = true;
  @Input() selectOveride = false;

  form: FormGroup;
  steps = ['import_guide', 'import_template', 'import', 'error_report'];
  hasErrors = false;
  private subscriptions: Subscription = new Subscription();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.updateOptions();
    this.determineSteps();
    this.initForm();
  }

  updateOptions(): void {
    this.showStepGuide = this.data?.showStepGuide ?? this.showStepGuide;
    this.showStepTemplate = this.data?.showStepTemplate ?? this.showStepTemplate;
    this.showStepError = this.data?.showStepError ?? this.showStepError;
    this.selectDate = this.data?.selectDate ?? this.selectDate;
    this.selectSeparator = this.data?.selectSeparator ?? this.selectSeparator;
    this.selectOveride = this.data?.selectOveride ?? this.selectOveride;
  }

  determineSteps(): void {
    const removeItem = (arr: string[], item: string) => arr.filter((f) => f !== item);
    if (!this.showStepGuide) {
      this.steps = removeItem(this.steps, 'import_guide');
    }
    if (!this.showStepTemplate) {
      this.steps = removeItem(this.steps, 'import_template');
    }
    if (!this.showStepGuide) {
      this.steps = removeItem(this.steps, 'error_report');
    }
  }

  initForm(): void {
    this.form = new FormGroup({
      date: new FormControl(),
      overwriteEntries: new FormControl(),
      separator: new FormControl('DEFAULT'),
      file: new FormControl(),
    });
  }

  get importGuideUrl(): string {
    let url = '';
    switch (this.data.type) {
      case ACTIONS_CASE.LINE_LISTING_IMPORT:
        url = '/SORMAS_Line_Listing_Import_Guide.pdf';
        break;
      case ACTIONS_CASE.DETAILED_IMPORT:
        url = '/SORMAS_Import_Guide.pdf';
        break;
      default:
    }
    return url;
  }

  import(): void {
    if (this.data.service) {
      this.subscriptions.add(
        this.data.service.import().subscribe((result: any) => {
          // eslint-disable-next-line no-console
          console.log(result);
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
