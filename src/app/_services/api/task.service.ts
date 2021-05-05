import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { TaskSerializer } from '../../_serializers/task.serializer';

import * as constants from '../../app.constants';
import { TaskDto } from '../../_models/taskDto';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService extends BaseService<TaskDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_TASKS, new TaskSerializer());
  }
}
