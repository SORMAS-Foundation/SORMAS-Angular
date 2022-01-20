/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { AggregateReportDto } from '../_models/models';

export class AggregateReportSerializer implements Serializer {
  fromJson(json: any): AggregateReportDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: AggregateReportDto): any {
    serializeDates(item);
    return item;
  }
}
