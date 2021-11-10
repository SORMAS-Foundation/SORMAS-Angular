/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { FacilityDto } from '../_models/models';
import { deserializeDates, serializeDates } from './date-parse';

export class FacilitySerializer implements Serializer {
  fromJson(json: any): FacilityDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: FacilityDto): any {
    serializeDates(item);
    return item;
  }
}
