import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from './shared/task.model';
import { TasksService } from './shared/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements AfterViewInit {
  tasks: Task[] = [];
  displayedColumns: string[] = [
    'associatedLink',
    'context',
    'type',
    'region',
    'district',
    'priority',
    'startDate',
    'dueDate',
    'assignee',
    'executionComments',
    'creator',
    'taskComments',
    'status',
  ];
  dataSource!: MatTableDataSource<Task>;
  formControl: FormGroup;
  priorityList: string[] = [];
  contextList: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private tasksService: TasksService) {
    this.formControl = new FormGroup({
      context: new FormControl(),
      region: new FormControl(),
      priority: new FormControl(),
    });
  }

  ngAfterViewInit(): void {
    this.tasksService.getTasks().then((tasksData) => {
      this.tasks = tasksData;
      this.dataSource = new MatTableDataSource(this.tasks);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.contextList = [...new Set(this.tasks.map((item) => item.context))];
      this.priorityList = [...new Set(this.tasks.map((item) => item.priority))];

      this.dataSource.filterPredicate = (data, filter) => {
        const filterObj = JSON.parse(filter);
        const checkContext =
          !filterObj.context ||
          !filterObj.context.length ||
          filterObj.context.includes(data.context);
        const checkRegion =
          !filterObj.region || data.region.toLowerCase().includes(filterObj.region);
        const checkPriority = !filterObj.priority || data.priority === filterObj.priority;
        return checkContext && checkRegion && checkPriority;
      };

      this.formControl.valueChanges.subscribe((value) => {
        this.dataSource.filter = JSON.stringify({ ...value });
      });
    });
  }
}
