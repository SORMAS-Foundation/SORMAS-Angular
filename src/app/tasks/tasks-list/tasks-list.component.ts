import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { NavItem, TableColumn } from '../../_models/common';
import { TaskDto } from '../../_models/taskDto';
import { TaskService } from '../../_services/api/task.service';
import { defaultColumnDefs } from './tasks-list-table-data';
import { TaskAddEditComponent } from '../task-add-edit/task-add-edit.component';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { actionsBulkEditDefs, actionsMoreDefs } from './task-list-actions-data';
import { TableComponent } from '../../shared/table/table.component';
import {
  ACTIONS_TASK,
  ADD_MODAL_MAX_WIDTH,
  EXPORT_CUSTOM_MODAL_WIDTH,
  CONFIG_TASKS,
  EXPORT_TYPE,
  SMALL_NOTIFICATION_MODAL_WIDTH,
  TASK_FILTERS_FORM_ID,
  EXPORT_TYPES,
  API_ROUTE_TASKS,
} from '../../app.constants';
import { CustomExportComponent } from '../../shared/modals/custom-export/custom-export.component';
import { FORM_DATA_EXPORT_CONFIGURATION } from './export-configuration-form-data';
import { NotificationService } from '../../_services/notification.service';
import { ExportService } from '../../_services/api/export.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit, OnDestroy {
  tasks: TaskDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_TASKS;
  formId = TASK_FILTERS_FORM_ID;

  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  actionsMore: NavItem[] = actionsMoreDefs;

  private subscription: Subscription[] = [];

  @ViewChild(TableComponent) tableComponent: TableComponent;

  constructor(
    public taskService: TaskService,
    public exportService: ExportService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private notificationService: NotificationService
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
        service: this.taskService,
        delete: true,
        context: this.translateService.instant('strings.entityTask'),
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
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
        if (result) {
          // this.tableComponent.getResources(true);
        }
      })
    );
  }

  onActionSelected(event: any): void {
    switch (event) {
      case ACTIONS_TASK.BASIC_EXPORT:
        this.exportBasicTask();
        break;
      case ACTIONS_TASK.DETAILED_EXPORT:
        this.exportDetailedTask();
        break;
      case ACTIONS_TASK.CUSTOM_EXPORT:
        this.customExport();
        break;
      default:
        break;
    }
  }

  customExport(): void {
    this.dialog.open(CustomExportComponent, {
      width: EXPORT_CUSTOM_MODAL_WIDTH,
      data: {
        exportType: EXPORT_TYPE.TASK,
        exportFormData: FORM_DATA_EXPORT_CONFIGURATION,
      },
    });
  }

  exportBasicTask(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportBasic'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_TASKS.EXPORT);
  }

  exportDetailedTask(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportDetailed'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.DETAILED, API_ROUTE_TASKS.EXPORT);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
