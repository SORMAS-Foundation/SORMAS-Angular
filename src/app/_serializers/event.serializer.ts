/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { EventDto } from '../_models/eventDto';
import { deserializeDates, serializeDates } from './date-parse';

export class EventSerializer implements Serializer {
  fromJson(json: any): EventDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(eventItem: EventDto): any {
    serializeDates(eventItem);
    return eventItem;
  }
}
