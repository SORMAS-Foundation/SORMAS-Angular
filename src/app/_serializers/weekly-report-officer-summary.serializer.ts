/* eslint-disable no-param-reassign */
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';
import { WeeklyReportOfficerSummaryDto } from '../_models/weeklyReportOfficerSummaryDto';

export class WeeklyReportOfficerSummarySerializer implements Serializer {
  fromJson(json: any): WeeklyReportOfficerSummaryDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: WeeklyReportOfficerSummaryDto): any {
    serializeDates(item);
    return item;
  }
}
