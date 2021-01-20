import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

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
  displayedColumnsSS: string[] = ['context', 'type', 'region', 'district', 'priority', 'status'];
  dataSource!: MatTableDataSource<Task>;
  dataSourceSS!: MatTableDataSource<Task>;
  formControl: FormGroup;
  priorityList: string[] = [];
  contextList: string[] = [];
  isLoadingResults = false;
  resultsLength = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('tasksListPaginator', { read: MatPaginator, static: true })
  tasksListPaginator!: MatPaginator;
  @ViewChild('tableTasks', { read: MatSort, static: true }) tasksListSort!: MatSort;

  constructor(private tasksService: TasksService) {
    this.formControl = new FormGroup({
      context: new FormControl(),
      region: new FormControl(),
      priority: new FormControl(),
    });
  }

  ngAfterViewInit(): void {
    this.tasksService.getTasks().then((tasksData) => {
      this.tasks = tasksData.items;
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

      this.tasksListSort.sortChange.subscribe(() => {
        this.tasksListPaginator.pageIndex = 0;
      });

      merge(this.tasksListSort.sortChange, this.tasksListPaginator.page)
        .pipe(
          startWith({}),
          switchMap(() => {
            this.isLoadingResults = true;
            return this.tasksService.getTasks(
              this.tasksListSort.active as keyof Task,
              this.tasksListSort.direction,
              5,
              this.tasksListPaginator.pageIndex
            );
          }),
          map((data) => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.resultsLength = data.totalCount;

            return data.items;
          }),
          catchError(() => {
            this.isLoadingResults = false;
            return observableOf([]);
          })
        )
        .subscribe((data) => {
          this.dataSourceSS = new MatTableDataSource(data);
        });
    });
  }
}
