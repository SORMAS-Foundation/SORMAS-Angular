/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { TaskDto } from '../_models/taskDto';
import { deserializeDates, serializeDates } from './date-parse';

export class TaskSerializer implements Serializer {
  fromJson(json: any): TaskDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(caseItem: TaskDto): any {
    serializeDates(caseItem);
    return caseItem;
  }
}
