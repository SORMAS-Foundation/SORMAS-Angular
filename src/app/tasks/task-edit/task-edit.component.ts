import { Component } from '@angular/core';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import * as data from './task-edit-form-data';
import { TaskService } from '../../_services/api/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent {
  public formData: FormBase<any>[] = data.FORM_DATA_TASK_EDIT;

  constructor(public taskService: TaskService) {}
}
