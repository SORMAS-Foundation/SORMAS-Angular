/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { WeeklyReportDto } from '../_models/weeklyReportDto';

export class WeeklyReportSerializer implements Serializer {
  fromJson(json: any): WeeklyReportDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: WeeklyReportDto): any {
    serializeDates(item);
    return item;
  }
}
