import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, form: FormBuilder) {
    this.form = form.group({
      title: form.control('initial value', Validators.required),
    });
  }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit(): void {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
