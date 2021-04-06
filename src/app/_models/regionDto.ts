import { AreaReferenceDto } from './areaReferenceDto';

export interface RegionDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  name?: string;
  epidCode?: string;
  growthRate?: number;
  archived?: boolean;
  externalID?: string;
  area?: AreaReferenceDto;
}
