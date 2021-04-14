import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { TaskSerializer } from '../../_serializers/task.serializer';

import * as constants from '../../app.constants';
import { TaskDto } from '../../_models/taskDto';

@Injectable({
  providedIn: 'root',
})
export class CaseService extends BaseService<TaskDto> {
  constructor(httpClient: HttpClient) {
    super(httpClient, '', constants.API_ROUTE_CASES, new TaskSerializer());
  }
}
