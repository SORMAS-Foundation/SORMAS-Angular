import { Disease } from './disease';
import { SymptomsDto } from './symptomsDto';
import { VisitStatus } from './visitStatus';

export interface ExternalVisitDto {
  personUuid: string;
  disease: Disease;
  visitDateTime: Date;
  visitStatus: VisitStatus;
  visitRemarks?: string;
  symptoms?: SymptomsDto;
  reportLat?: number;
  reportLon?: number;
  reportLatLonAccuracy?: number;
}
