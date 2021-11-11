/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { OutbreakDto } from '../_models/models';

export class OutbreakSerializer implements Serializer {
  fromJson(json: any): OutbreakDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: OutbreakDto): any {
    serializeDates(item);
    return item;
  }
}
