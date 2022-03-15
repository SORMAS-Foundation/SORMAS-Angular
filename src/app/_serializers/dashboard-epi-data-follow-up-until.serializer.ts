/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';

export class DashboardEpiDataFollowUpUntilSerializer implements Serializer {
  fromJson(json: any): any {
    deserializeDates(json);
    return json;
  }

  toJson(item: any): any {
    serializeDates(item);
    return item;
  }
}
