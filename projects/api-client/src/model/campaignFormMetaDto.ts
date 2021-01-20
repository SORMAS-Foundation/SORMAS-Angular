/**
 * SORMAS REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.51.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
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
