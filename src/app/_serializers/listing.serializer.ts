/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { ListingDto } from '../_models/listingDto';

export class ListingSerializer implements Serializer {
  fromJson(json: any): ListingDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: ListingDto): any {
    serializeDates(item);
    return item;
  }
}
