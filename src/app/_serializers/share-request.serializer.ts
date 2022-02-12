/* eslint-disable no-param-reassign */
import { SormasToSormasShareRequestIndexDto } from '../_models/models';
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';

export class ShareRequestSerializer implements Serializer {
  fromJson(json: any): SormasToSormasShareRequestIndexDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: SormasToSormasShareRequestIndexDto): any {
    serializeDates(item);
    return item;
  }
}
