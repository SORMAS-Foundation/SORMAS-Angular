import { Serializer } from './base.serializer';
import { CaseItem } from '../_models/case';

export class CaseSerializer implements Serializer {
  fromJson(json: any): CaseItem {
    return json;
  }

  toJson(caseItem: CaseItem): any {
    return caseItem;
  }
}
