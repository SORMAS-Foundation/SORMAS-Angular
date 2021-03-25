import { Disease } from './disease';
import { PersonReferenceDto } from './personReferenceDto';
import { SymptomsDto } from './symptomsDto';
import { UserReferenceDto } from './userReferenceDto';
import { VisitOrigin } from './visitOrigin';
import { VisitStatus } from './visitStatus';

export interface VisitDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  person: PersonReferenceDto;
  disease?: Disease;
  visitDateTime: Date;
  visitUser: UserReferenceDto;
  visitStatus: VisitStatus;
  visitRemarks?: string;
  symptoms?: SymptomsDto;
  reportLat?: number;
  reportLon?: number;
  reportLatLonAccuracy?: number;
  origin?: VisitOrigin;
}
