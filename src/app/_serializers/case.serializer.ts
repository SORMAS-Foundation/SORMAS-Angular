import { Serializer } from './base.serializer';
import { CaseDataDto } from '../_models/caseDataDto';
import { deserializeDates, serializeDates } from './date-parse';

export class CaseSerializer implements Serializer {
  fromJson(json: any): CaseDataDto {
    // eslint-disable-next-line no-param-reassign
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(caseItem: CaseDataDto): any {
    serializeDates(caseItem);
    return caseItem;
  }
}
