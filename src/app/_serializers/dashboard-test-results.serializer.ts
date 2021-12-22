/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';

export class DashboardTestResultsSerializer implements Serializer {
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
