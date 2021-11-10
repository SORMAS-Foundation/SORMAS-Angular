/**
 * SORMAS REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.64.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PathogenTestResultType } from './pathogenTestResultType';
import { Sex } from './sex';
import { VaccinationStatus } from './vaccinationStatus';

export interface EventParticipantIndexDto {
  pseudonymized?: boolean;
  uuid?: string;
  personUuid?: string;
  caseUuid?: string;
  eventUuid?: string;
  firstName?: string;
  lastName?: string;
  sex?: Sex;
  approximateAge?: number;
  involvementDescription?: string;
  contactCount?: number;
  pathogenTestResult?: PathogenTestResultType;
  sampleDateTime?: Date;
  vaccinationStatus?: VaccinationStatus;
  inJurisdiction?: boolean;
  inJurisdictionOrOwned?: boolean;
}
