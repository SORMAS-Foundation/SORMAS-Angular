/**
 * SORMAS REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.57.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export type CovidTestReason =
  | 'PRESENCE_OF_SYMPTOMS'
  | 'OUTBREAK_INVESTIGATION_SCREENING'
  | 'COHORT_SCREENING'
  | 'REQUIREMENT_OF_EMPLOYER'
  | 'DURING_QUARANTINE'
  | 'AFTER_CONTACT_TRACING'
  | 'SWISS_COVID_APP_NOTIFICATION'
  | 'OTHER_REASON';

export const CovidTestReason = {
  PRESENCEOFSYMPTOMS: 'PRESENCE_OF_SYMPTOMS' as CovidTestReason,
  OUTBREAKINVESTIGATIONSCREENING: 'OUTBREAK_INVESTIGATION_SCREENING' as CovidTestReason,
  COHORTSCREENING: 'COHORT_SCREENING' as CovidTestReason,
  REQUIREMENTOFEMPLOYER: 'REQUIREMENT_OF_EMPLOYER' as CovidTestReason,
  DURINGQUARANTINE: 'DURING_QUARANTINE' as CovidTestReason,
  AFTERCONTACTTRACING: 'AFTER_CONTACT_TRACING' as CovidTestReason,
  SWISSCOVIDAPPNOTIFICATION: 'SWISS_COVID_APP_NOTIFICATION' as CovidTestReason,
  OTHERREASON: 'OTHER_REASON' as CovidTestReason,
};
