import { Serializer } from './base.serializer';
import { CaseItem } from '../_models/case';

export class CaseSerializer implements Serializer {
  fromJson(json: any): CaseItem {

    json['xx'] = 'bogus data'; // toDo: backend needs finish

    return json;
  }

  toJson(caseItem: CaseItem): any {
    return caseItem;
  }
}
