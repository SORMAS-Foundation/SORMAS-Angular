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