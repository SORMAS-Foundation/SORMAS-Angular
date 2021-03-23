import { Disease } from './disease';
import { Person } from './person';
import { User } from './user';

const CASE_CLASSIFICATION = [
  'NOT_CLASSIFIED',
  'SUSPECT',
  'PROBABLE',
  'CONFIRMED',
  'CONFIRMED_NO_SYMPTOMS',
  'CONFIRMED_UNKNOWN_SYMPTOMS',
  'NO_CASE',
] as const;

export type CaseOutcome = 'NO_OUTCOME' | 'DECEASED' | 'RECOVERED' | 'UNKNOWN';
// export type CaseClassification =
//   | 'NOT_CLASSIFIED'
//   | 'SUSPECT'
//   | 'PROBABLE'
//   | 'CONFIRMED'
//   | 'CONFIRMED_NO_SYMPTOMS'
//   | 'CONFIRMED_UNKNOWN_SYMPTOMS'
//   | 'NO_CASE';
export type CaseClassification = typeof CASE_CLASSIFICATION[number];

export interface CaseItem {
  id: number | string;
  person: Person;
  outcome: CaseOutcome;
  caseClassification: CaseClassification;
  disease: Disease;
  uuid: string;
  reportDate: number;
  reportingUser: User;
  personFirstName: string;
  personLastName: string;
  vaccineName: string;
  additionalDetails: string;
}
