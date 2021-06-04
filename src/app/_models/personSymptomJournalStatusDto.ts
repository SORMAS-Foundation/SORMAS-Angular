import { SymptomJournalStatus } from './symptomJournalStatus';

export interface PersonSymptomJournalStatusDto {
  status: SymptomJournalStatus;
  statusDateTime?: string;
}
