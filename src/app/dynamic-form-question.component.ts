import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from './question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<string> = {
    controlType: '',
    key: '',
    label: '',
    options: [],
    order: 0,
    required: true,
    type: '',
    value: '',
  };
  @Input() form: FormGroup;
  constructor(fg: FormBuilder) {
    this.form = fg.group({
      title: fg.control('initial value', Validators.required),
    });
  }
  get isValid(): boolean {
    return this.form.controls[this.question.key].valid;
  }
}
