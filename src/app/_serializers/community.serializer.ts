/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { CommunityDto } from '../_models/models';
import { deserializeDates, serializeDates } from './date-parse';

export class CommunitySerializer implements Serializer {
  fromJson(json: any): CommunityDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: CommunityDto): any {
    serializeDates(item);
    return item;
  }
}
