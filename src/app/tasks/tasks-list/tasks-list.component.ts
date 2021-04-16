import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../shared/table/table-column';
import { TaskDto } from '../../_models/taskDto';
import { TaskService } from '../../_services/api/task.service';
import { defaultColumnDefs } from './tasks-list-table-data';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  tasks: TaskDto[] = [];
  defaultColumns: TableColumn[] = [];

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }
}
