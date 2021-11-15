import { Component } from '@angular/core';
import { HEADER_HEIGHT, TASK_FILTERS_FORM_ID } from '../app.constants';
import { FormBase } from '../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_TASK_FILTERS } from './task-filters/task-filters-form-data';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_TASK_FILTERS));
  formId = TASK_FILTERS_FORM_ID;
  headerHeight = HEADER_HEIGHT;
}
