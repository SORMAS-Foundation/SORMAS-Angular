/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { PersonDto } from '../_models/models';

export class PersonSerializer implements Serializer {
  fromJson(json: any): PersonDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(person: PersonDto): any {
    serializeDates(person);
    return person;
  }
}
