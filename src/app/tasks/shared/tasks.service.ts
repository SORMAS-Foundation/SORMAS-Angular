import { Injectable } from '@angular/core';
import { Task, TaskApi } from './task.model';
import { TASKS } from './mock-tasks';

const ASC = 'asc';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  getTasks(
    sortKey?: keyof Task,
    order?: string,
    pageItems?: number,
    pageNumber?: number
  ): Promise<TaskApi> {
    let results: Task[] = [...TASKS];

    if (sortKey && order) {
      results = results.sort((a: Task, b: Task) => {
        if (a[sortKey] > b[sortKey]) {
          return order === ASC ? 1 : -1;
        }
        if (b[sortKey] > a[sortKey]) {
          return order === ASC ? -1 : 1;
        }
        return 0;
      });
    }

    if (pageItems !== undefined && pageNumber !== undefined) {
      results = results.slice(pageItems * pageNumber, pageItems * (pageNumber + 1));
    }

    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            totalCount: TASKS.length,
            items: results,
          }),
        600
      )
    );
  }
}
