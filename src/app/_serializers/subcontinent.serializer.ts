/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { SubcontinentDto } from '../_models/subcontinentDto';

export class SubcontinentSerializer implements Serializer {
  fromJson(json: any): SubcontinentDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: SubcontinentDto): any {
    serializeDates(item);
    return item;
  }
}
