/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { ImmunizationDto } from '../_models/immunizationDto';

export class ImmunizationSerializer implements Serializer {
  fromJson(json: any): ImmunizationDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(caseItem: ImmunizationDto): any {
    serializeDates(caseItem);
    return caseItem;
  }
}
