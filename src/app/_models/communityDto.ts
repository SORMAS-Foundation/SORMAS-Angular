import { DistrictReferenceDto } from './districtReferenceDto';
import { RegionReferenceDto } from './regionReferenceDto';

export interface CommunityDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  name?: string;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  archived?: boolean;
  externalID?: string;
}
