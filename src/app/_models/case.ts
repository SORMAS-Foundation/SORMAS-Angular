import { Disease } from './disease';
import { Person } from './person';
import { User } from './user';

export type CaseOutcome = 'NO_OUTCOME' | 'DECEASED' | 'RECOVERED' | 'UNKNOWN';
export type CaseClassification =
  | 'NOT_CLASSIFIED'
  | 'SUSPECT'
  | 'PROBABLE'
  | 'CONFIRMED'
  | 'CONFIRMED_NO_SYMPTOMS'
  | 'CONFIRMED_UNKNOWN_SYMPTOMS'
  | 'NO_CASE';

export interface CaseItem {
  id: number | string;
  person: Person;
  outcome: CaseOutcome;
  caseClassification: CaseClassification;
  disease: Disease;
  uuid: string;
  reportingUser: User;
  personFirstName: string;
  personLastName: string;
}
