import { DistrictReferenceDto } from './districtReferenceDto';
import { PointOfEntryType } from './pointOfEntryType';
import { RegionReferenceDto } from './regionReferenceDto';

export interface PointOfEntryDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pointOfEntryType?: PointOfEntryType;
  name?: string;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  latitude?: number;
  longitude?: number;
  active?: boolean;
  archived?: boolean;
  externalID?: string;
  nameOtherPointOfEntry?: boolean;
  otherPointOfEntry?: boolean;
}
