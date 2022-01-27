import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DiseaseService } from '../../../_services/api/disease.service';
import { FormActionsService } from '../../../_services/form-actions.service';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-msers-diseases',
  templateUrl: './msers-diseases.component.html',
  styleUrls: ['./msers-diseases.component.scss'],
})
export class MsersDiseasesComponent implements OnInit, OnDestroy {
  config: FormElementBase<any>;
  group: FormGroup;
  formId: string;

  diseases: any[] = [];
  form = new FormGroup({});
  subscriptions: Subscription[] = [];

  constructor(
    private diseaseService: DiseaseService,
    private formActionsService: FormActionsService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.diseaseService.getAll().subscribe((response: any) => {
        this.diseases = response.elements;
        this.createForm();
      })
    );
    this.subscriptions.push(
      this.form.valueChanges.pipe(debounceTime(300)).subscribe(() => this.setMsersDiseases())
    );
  }

  createForm(): void {
    this.diseases.forEach(({ disease }) => {
      if (disease) {
        this.form.addControl(`newCases__${disease}`, new FormControl());
        this.form.addControl(`labConfirmations__${disease}`, new FormControl());
        this.form.addControl(`deaths__${disease}`, new FormControl());
      }
    });
  }

  setMsersDiseases(): void {
    const result = this.diseases.map(({ disease }) => ({
      disease,
      newCases: this.form.value[`newCases__${disease}`],
      labConfirmations: this.form.value[`labConfirmations__${disease}`],
      deaths: this.form.value[`deaths__${disease}`],
    }));
    this.group.get(this.config.key)?.setValue(result);
    this.formActionsService.setInputChange(this.formId, this.config.key, true);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
