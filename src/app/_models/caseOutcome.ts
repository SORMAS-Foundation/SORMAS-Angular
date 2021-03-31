/* eslint-disable @typescript-eslint/no-redeclare */

export type CaseOutcome = 'NO_OUTCOME' | 'DECEASED' | 'RECOVERED' | 'UNKNOWN';

export const CaseOutcome = {
  NOOUTCOME: 'NO_OUTCOME' as CaseOutcome,
  DECEASED: 'DECEASED' as CaseOutcome,
  RECOVERED: 'RECOVERED' as CaseOutcome,
  UNKNOWN: 'UNKNOWN' as CaseOutcome,
};
