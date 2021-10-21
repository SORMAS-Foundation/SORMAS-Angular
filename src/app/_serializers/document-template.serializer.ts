/* eslint-disable no-param-reassign */
import { DocumentDto } from '../_models/documentDto';
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';

export class DocumentTemplateSerializer implements Serializer {
  fromJson(json: any): DocumentDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: DocumentDto): any {
    serializeDates(item);
    return item;
  }
}
