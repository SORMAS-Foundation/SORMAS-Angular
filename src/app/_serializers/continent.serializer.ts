/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { ContinentDto } from '../_models/continentDto';

export class ContinentSerializer implements Serializer {
  fromJson(json: any): ContinentDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: ContinentDto): any {
    serializeDates(item);
    return item;
  }
}
