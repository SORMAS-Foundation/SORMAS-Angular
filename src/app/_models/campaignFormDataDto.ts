import { CampaignFormDataEntry } from './campaignFormDataEntry';
import { CampaignFormMetaReferenceDto } from './campaignFormMetaReferenceDto';
import { CampaignReferenceDto } from './campaignReferenceDto';
import { CommunityReferenceDto } from './communityReferenceDto';
import { DistrictReferenceDto } from './districtReferenceDto';
import { RegionReferenceDto } from './regionReferenceDto';
import { UserReferenceDto } from './userReferenceDto';

export interface CampaignFormDataDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  formValues?: Array<CampaignFormDataEntry>;
  campaign?: CampaignReferenceDto;
  campaignFormMeta?: CampaignFormMetaReferenceDto;
  formDate?: Date;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  community?: CommunityReferenceDto;
  creatingUser?: UserReferenceDto;
}
