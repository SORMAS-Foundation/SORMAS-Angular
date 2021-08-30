/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { DistrictDto } from '../_models/models';
import { deserializeDates, serializeDates } from './date-parse';

export class DistrictSerializer implements Serializer {
  fromJson(json: any): DistrictDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: DistrictDto): any {
    serializeDates(item);
    return item;
  }
}
