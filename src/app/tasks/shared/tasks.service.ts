import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { TASKS } from './mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  getTasks(): Promise<Task[]> {
    return Promise.resolve(TASKS);
  }
}
