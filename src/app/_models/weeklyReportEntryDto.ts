import { Disease } from './disease';

export interface WeeklyReportEntryDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  disease?: Disease;
  numberOfCases?: number;
}
