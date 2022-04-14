/* eslint-disable no-param-reassign */
import { BaseSerializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';

export class Serializer implements BaseSerializer {
  fromJson(json: any): any {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: any): any {
    serializeDates(item);
    return item;
  }
}
