/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { SampleDto } from '../_models/sampleDto';
import { deserializeDates, serializeDates } from './date-parse';

export class SampleSerializer implements Serializer {
  fromJson(json: any): SampleDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(sampleItem: SampleDto): any {
    serializeDates(sampleItem);
    return sampleItem;
  }
}
