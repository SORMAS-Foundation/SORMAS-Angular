/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { PathogenTestDto } from '../_models/models';

export class PathogenTestSerializer implements Serializer {
  fromJson(json: any): PathogenTestDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(test: PathogenTestDto): any {
    serializeDates(test);
    return test;
  }
}
