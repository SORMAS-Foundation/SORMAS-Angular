import { CampaignFormElement } from './campaignFormElement';
import { CampaignFormTranslations } from './campaignFormTranslations';

export interface CampaignFormMetaDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  formId?: string;
  formName?: string;
  languageCode?: string;
  campaignFormElements?: Array<CampaignFormElement>;
  campaignFormTranslations?: Array<CampaignFormTranslations>;
}
