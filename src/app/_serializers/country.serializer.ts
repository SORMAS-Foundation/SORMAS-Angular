/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { CountryDto } from '../_models/models';
import { deserializeDates, serializeDates } from './date-parse';

export class CountrySerializer implements Serializer {
  fromJson(json: any): CountryDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: CountryDto): any {
    serializeDates(item);
    return item;
  }
}
