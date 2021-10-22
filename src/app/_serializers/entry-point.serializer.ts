/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { PointOfEntryDto } from '../_models/pointOfEntryDto';

export class EntryPointSerializer implements Serializer {
  fromJson(json: any): PointOfEntryDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: PointOfEntryDto): any {
    serializeDates(item);
    return item;
  }
}
