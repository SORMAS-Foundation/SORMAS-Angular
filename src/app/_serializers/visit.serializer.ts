/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { VisitDto } from '../_models/visitDto';
import { deserializeDates, serializeDates } from './date-parse';

export class VisitSerializer implements Serializer {
  fromJson(json: any): VisitDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: VisitDto): any {
    serializeDates(item);
    return item;
  }
}
