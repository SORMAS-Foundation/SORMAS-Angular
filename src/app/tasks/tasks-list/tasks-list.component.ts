import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { NavItem, TableColumn } from '../../_models/common';
import { CONFIG_TASKS } from '../../_constants/storage';
import { TaskDto } from '../../_models/taskDto';
import { TaskService } from '../../_services/api/task.service';
import { defaultColumnDefs } from './tasks-list-table-data';
import { TaskAddEditComponent } from '../task-add-edit/task-add-edit.component';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { actionsBulkEditDefs } from './task-list-actions-data';
import { FormActionsService } from '../../_services/form-actions.service';
import { TableComponent } from '../../shared/table/table.component';
import { ADD_MODAL_MAX_WIDTH } from '../../app.constants';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit, OnDestroy {
  tasks: TaskDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_TASKS;

  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;

  private subscription: Subscription[] = [];

  @ViewChild(TableComponent) tableComponent: TableComponent;

  constructor(
    public taskService: TaskService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private formActionsService: FormActionsService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  openEditTaskModal(task: TaskDto): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('strings.headingEditTask'),
        component: TaskAddEditComponent,
        resource: task,
        delete: true,
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        this.formActionsService.setDiscard();
        if (result) {
          // this.tableComponent.getResources(true);
        }
      })
    );
  }

  openAddTaskModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('strings.headingCreateNewTask'),
        component: TaskAddEditComponent,
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        this.formActionsService.setDiscard();
        if (result) {
          // this.tableComponent.getResources(true);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
