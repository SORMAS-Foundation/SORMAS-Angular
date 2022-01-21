/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { VaccinationDto } from '../_models/models';

export class VaccinationSerializer implements Serializer {
  fromJson(json: any): VaccinationDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(vaccination: VaccinationDto): any {
    serializeDates(vaccination);
    return vaccination;
  }
}
