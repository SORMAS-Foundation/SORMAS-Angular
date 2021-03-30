import { Disease } from './disease';
import { DistrictReferenceDto } from './districtReferenceDto';
import { FeatureType } from './featureType';
import { RegionReferenceDto } from './regionReferenceDto';

export interface FeatureConfigurationDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  featureType?: FeatureType;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  disease?: Disease;
  endDate?: Date;
  enabled?: boolean;
}
