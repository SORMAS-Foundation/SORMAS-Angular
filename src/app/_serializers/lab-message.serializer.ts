/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { LabMessageDto } from '../_models/labMessageDto';

export class LabMessageSerializer implements Serializer {
  fromJson(json: any): LabMessageDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(caseItem: LabMessageDto): any {
    serializeDates(caseItem);
    return caseItem;
  }
}
