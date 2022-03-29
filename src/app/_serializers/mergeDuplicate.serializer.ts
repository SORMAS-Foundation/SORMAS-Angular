/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { MergeDuplicateDto } from '../_models/mergeDuplicateDto';

export class MergeDuplicateSerializer implements Serializer {
  fromJson(json: any): MergeDuplicateDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(mergeDuplicateItem: MergeDuplicateDto): any {
    serializeDates(mergeDuplicateItem);
    return mergeDuplicateItem;
  }
}
