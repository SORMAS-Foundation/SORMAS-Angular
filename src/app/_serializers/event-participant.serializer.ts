/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { EventParticipantDto } from '../_models/eventParticipantDto';

export class EventParticipantSerializer implements Serializer {
  fromJson(json: any): EventParticipantDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: EventParticipantDto): any {
    serializeDates(item);
    return item;
  }
}
