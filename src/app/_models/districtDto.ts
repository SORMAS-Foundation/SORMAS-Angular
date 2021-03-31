import { RegionReferenceDto } from './regionReferenceDto';

export interface DistrictDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  name?: string;
  epidCode?: string;
  growthRate?: number;
  region?: RegionReferenceDto;
  archived?: boolean;
  externalID?: string;
}
