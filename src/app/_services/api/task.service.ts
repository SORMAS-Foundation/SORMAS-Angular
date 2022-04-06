import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import * as constants from '../../app.constants';
import { TaskDto } from '../../_models/taskDto';
import { HelperService } from '../helper.service';
import { Serializer } from '../../_serializers/serializer';
import { API_ROUTE_TASKS } from '../../app.constants';

@Injectable({
  providedIn: 'root',
})
export class TaskService extends BaseService<TaskDto> {
  export(type: string): Observable<any> {
    const endpoint: string = API_ROUTE_TASKS.EXPORT;
    return this.httpClient.post(`${this.helperService.getApiUrl()}/${endpoint}`, {
      exportType: type,
    });
  }

  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_TASKS, new Serializer());
  }
}
