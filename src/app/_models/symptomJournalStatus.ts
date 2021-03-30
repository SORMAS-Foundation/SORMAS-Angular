/* eslint-disable @typescript-eslint/no-redeclare */

export type SymptomJournalStatus =
  | 'UNREGISTERED'
  | 'REGISTERED'
  | 'ACCEPTED'
  | 'REJECTED'
  | 'DELETED';

export const SymptomJournalStatus = {
  UNREGISTERED: 'UNREGISTERED' as SymptomJournalStatus,
  REGISTERED: 'REGISTERED' as SymptomJournalStatus,
  ACCEPTED: 'ACCEPTED' as SymptomJournalStatus,
  REJECTED: 'REJECTED' as SymptomJournalStatus,
  DELETED: 'DELETED' as SymptomJournalStatus,
};
