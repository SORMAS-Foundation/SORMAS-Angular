import { Component, Input, OnInit } from '@angular/core';
import * as data from './task-add-edit-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { TaskService } from '../../_services/api/task.service';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { TaskDto } from '../../_models/taskDto';

@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrls: ['./task-add-edit.component.scss'],
})
export class TaskAddEditComponent implements OnInit {
  @Input() selectedResource: TaskDto;
  myFormElements: FormBase<any>[] = [];
  formData = data.FORM_DATA_TASK_ADD_EDIT;

  constructor(
    public taskService: TaskService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    // const modifiedData: any = this.formData.find((item) => item.id === 'associatedCase');
    // if (modifiedData) {
    //   modifiedData.hidden = !this.selectedResource;
    // }

    if (this.selectedResource) {
      this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
        this.selectedResource,
        JSON.parse(JSON.stringify(data.FORM_DATA_TASK_ADD_EDIT))
      );
    } else {
      this.myFormElements = data.FORM_DATA_TASK_ADD_EDIT;
    }
  }
}
