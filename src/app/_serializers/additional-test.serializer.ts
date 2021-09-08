/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { AdditionalTestDto } from '../_models/models';

export class AdditionalTestSerializer implements Serializer {
  fromJson(json: any): AdditionalTestDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(test: AdditionalTestDto): any {
    serializeDates(test);
    return test;
  }
}
