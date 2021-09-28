import { Component, Input, OnInit } from '@angular/core';
import * as data from './task-add-edit-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { TaskService } from '../../_services/api/task.service';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { TaskDto } from '../../_models/taskDto';
import { UserService } from '../../_services/api/user.service';

@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrls: ['./task-add-edit.component.scss'],
})
export class TaskAddEditComponent implements OnInit {
  @Input() selectedResource: TaskDto;
  myFormElements: FormBase<any>[] = [];

  constructor(
    public taskService: TaskService,
    public userService: UserService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    this.userService.getAll(null, null, null, true).subscribe({
      next: (response: any) => {
        if (this.selectedResource) {
          this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
            this.selectedResource,
            JSON.parse(JSON.stringify(data.FORM_DATA_TASK_ADD_EDIT))
          );

          if (!this.selectedResource.caze) {
            this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
              this.myFormElements,
              'associatedCase',
              'hidden',
              true
            );
          }
        } else {
          this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_TASK_ADD_EDIT));

          this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
            this.myFormElements,
            'associatedCase',
            'hidden',
            true
          );
          this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
            this.myFormElements,
            'executionComment',
            'hidden',
            true
          );
          this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
            this.myFormElements,
            'taskStatus',
            'hidden',
            true
          );
        }

        this.myFormElements = this.formElementControlService.setOptionsToInput(
          response.elements,
          this.myFormElements,
          'assigneeUser.uuid',
          'userName'
        );
      },
      error: () => {},
      complete: () => {},
    });
  }
}
