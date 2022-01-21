/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { TravelEntryDto } from '../_models/travelEntryDto';

export class TravelEntrySerializer implements Serializer {
  fromJson(json: any): TravelEntryDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(entryItem: TravelEntryDto): any {
    serializeDates(entryItem);
    return entryItem;
  }
}
