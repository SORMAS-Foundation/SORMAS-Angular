/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { RegionDto } from '../_models/models';
import { deserializeDates, serializeDates } from './date-parse';

export class RegionSerializer implements Serializer {
  fromJson(json: any): RegionDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: RegionDto): any {
    serializeDates(item);
    return item;
  }
}
