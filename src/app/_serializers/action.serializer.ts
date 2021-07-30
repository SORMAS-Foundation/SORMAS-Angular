/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { ActionDto } from '../_models/models';
import { deserializeDates, serializeDates } from './date-parse';

export class ActionSerializer implements Serializer {
  fromJson(json: any): ActionDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: ActionDto): any {
    serializeDates(item);
    return item;
  }
}
