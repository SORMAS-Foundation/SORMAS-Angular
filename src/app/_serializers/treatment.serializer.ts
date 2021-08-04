/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { TreatmentDto } from '../_models/models';

export class TreatmentSerializer implements Serializer {
  fromJson(json: any): TreatmentDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(treatment: TreatmentDto): any {
    serializeDates(treatment);
    return treatment;
  }
}
