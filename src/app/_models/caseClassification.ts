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

export type CaseClassification =
  | 'NOT_CLASSIFIED'
  | 'SUSPECT'
  | 'PROBABLE'
  | 'CONFIRMED'
  | 'CONFIRMED_NO_SYMPTOMS'
  | 'CONFIRMED_UNKNOWN_SYMPTOMS'
  | 'NO_CASE';

export const CaseClassification = {
  NOTCLASSIFIED: 'NOT_CLASSIFIED' as CaseClassification,
  SUSPECT: 'SUSPECT' as CaseClassification,
  PROBABLE: 'PROBABLE' as CaseClassification,
  CONFIRMED: 'CONFIRMED' as CaseClassification,
  CONFIRMEDNOSYMPTOMS: 'CONFIRMED_NO_SYMPTOMS' as CaseClassification,
  CONFIRMEDUNKNOWNSYMPTOMS: 'CONFIRMED_UNKNOWN_SYMPTOMS' as CaseClassification,
  NOCASE: 'NO_CASE' as CaseClassification,
};
