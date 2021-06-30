/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { ContactDto } from '../_models/contactDto';

export class ContactSerializer implements Serializer {
  fromJson(json: any): ContactDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(contactItem: ContactDto): any {
    serializeDates(contactItem);
    return contactItem;
  }
}
