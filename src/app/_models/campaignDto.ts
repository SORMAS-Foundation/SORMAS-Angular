import { CampaignDashboardElement } from './campaignDashboardElement';
import { CampaignFormMetaReferenceDto } from './campaignFormMetaReferenceDto';
import { UserReferenceDto } from './userReferenceDto';

export interface CampaignDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  name?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  creatingUser?: UserReferenceDto;
  campaignFormMetas?: Array<CampaignFormMetaReferenceDto>;
  campaignDashboardElements?: Array<CampaignDashboardElement>;
}
