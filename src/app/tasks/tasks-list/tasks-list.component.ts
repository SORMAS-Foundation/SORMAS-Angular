import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../_models/common';
import { CONFIG_TASKS } from '../../_constants/storage';
import { TaskDto } from '../../_models/taskDto';
import { TaskService } from '../../_services/api/task.service';
import { defaultColumnDefs } from './tasks-list-table-data';
import { AddBaseModalComponent } from '../../shared/modals/add-base-modal/add-base-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ADD_MODAL_MAX_WIDTH } from '../../app.constants';
import { TranslateService } from '@ngx-translate/core';
import { TaskAddComponent } from '../task-add/task-add.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  tasks: TaskDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_TASKS;

  private subscription: Subscription[] = [];

  constructor(
    public taskService: TaskService,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  openAddTaskModal(): void {
    const dialogRef = this.dialog.open(AddBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('Task.addNewTask'),
        component: TaskAddComponent,
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }
}
