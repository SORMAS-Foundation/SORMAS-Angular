import { CaseReferenceDto } from './caseReferenceDto';
import { DistrictReferenceDto } from './districtReferenceDto';
import { EventReferenceDto } from './eventReferenceDto';
import { PersonDto } from './personDto';
import { RegionReferenceDto } from './regionReferenceDto';
import { UserReferenceDto } from './userReferenceDto';
import { VaccinationInfoDto } from './vaccinationInfoDto';

export interface EventParticipantDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  reportingUser?: UserReferenceDto;
  event: EventReferenceDto;
  person: PersonDto;
  involvementDescription?: string;
  resultingCase?: CaseReferenceDto;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  vaccinationInfo?: VaccinationInfoDto;
}
