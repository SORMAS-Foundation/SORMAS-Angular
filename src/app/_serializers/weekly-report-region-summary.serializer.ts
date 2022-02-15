/* eslint-disable no-param-reassign */
import { WeeklyReportRegionSummaryDto } from '../_models/models';
import { Serializer } from './base.serializer';
import { deserializeDates, serializeDates } from './date-parse';

export class WeeklyReportRegionSummarySerializer implements Serializer {
  fromJson(json: any): WeeklyReportRegionSummaryDto {
    json.id = json.id ?? json.uuid;
    deserializeDates(json);
    return json;
  }

  toJson(item: WeeklyReportRegionSummaryDto): any {
    serializeDates(item);
    return item;
  }
}
