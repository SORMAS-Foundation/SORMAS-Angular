/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { EventGroupsIndexDto } from '../_models/eventGroupsIndexDto';

export class EventGroupSerializer implements Serializer {
  fromJson(json: any): EventGroupsIndexDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: EventGroupsIndexDto): any {
    serializeDates(item);
    return item;
  }
}
