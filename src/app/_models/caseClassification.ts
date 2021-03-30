/* eslint-disable @typescript-eslint/no-redeclare */

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
