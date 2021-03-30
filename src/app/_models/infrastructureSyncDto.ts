import { CampaignDto } from './campaignDto';
import { CampaignFormMetaDto } from './campaignFormMetaDto';
import { CommunityDto } from './communityDto';
import { CountryDto } from './countryDto';
import { DiseaseClassificationCriteriaDto } from './diseaseClassificationCriteriaDto';
import { DiseaseConfigurationDto } from './diseaseConfigurationDto';
import { DistrictDto } from './districtDto';
import { FacilityDto } from './facilityDto';
import { FeatureConfigurationDto } from './featureConfigurationDto';
import { PointOfEntryDto } from './pointOfEntryDto';
import { RegionDto } from './regionDto';
import { UserDto } from './userDto';
import { UserRoleConfigDto } from './userRoleConfigDto';

export interface InfrastructureSyncDto {
  initialSyncRequired?: boolean;
  countries?: Array<CountryDto>;
  regions?: Array<RegionDto>;
  districts?: Array<DistrictDto>;
  communities?: Array<CommunityDto>;
  facilities?: Array<FacilityDto>;
  pointsOfEntry?: Array<PointOfEntryDto>;
  users?: Array<UserDto>;
  diseaseClassifications?: Array<DiseaseClassificationCriteriaDto>;
  diseaseConfigurations?: Array<DiseaseConfigurationDto>;
  userRoleConfigurations?: Array<UserRoleConfigDto>;
  deletedUserRoleConfigurationUuids?: Array<string>;
  featureConfigurations?: Array<FeatureConfigurationDto>;
  deletedFeatureConfigurationUuids?: Array<string>;
  campaigns?: Array<CampaignDto>;
  campaignFormMetas?: Array<CampaignFormMetaDto>;
}
