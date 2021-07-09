/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { PrescriptionDto } from '../_models/models';

export class PrescriptionSerializer implements Serializer {
  fromJson(json: any): PrescriptionDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(prescription: PrescriptionDto): any {
    serializeDates(prescription);
    return prescription;
  }
}
