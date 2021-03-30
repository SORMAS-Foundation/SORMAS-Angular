import { Disease } from './disease';
import { DistrictReferenceDto } from './districtReferenceDto';
import { UserReferenceDto } from './userReferenceDto';

export interface OutbreakDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  district?: DistrictReferenceDto;
  disease?: Disease;
  startDate?: Date;
  endDate?: Date;
  reportingUser?: UserReferenceDto;
  reportDate?: Date;
}
