/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { ClinicalVisitDto } from '../_models/clinicalVisitDto';
import { deserializeDates, serializeDates } from './date-parse';

export class ClinicalVisitSerializer implements Serializer {
  fromJson(json: any): ClinicalVisitDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(caseItem: ClinicalVisitDto): any {
    serializeDates(caseItem);
    return caseItem;
  }
}
