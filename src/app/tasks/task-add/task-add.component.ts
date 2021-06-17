import { Component } from '@angular/core';
import * as data from './task-add-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { TaskService } from '../../_services/api/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent {
  public formData: FormBase<any>[] = data.FORM_DATA_TASK_ADD;

  constructor(public taskService: TaskService) {}
}
