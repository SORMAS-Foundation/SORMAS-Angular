/* eslint-disable @typescript-eslint/no-redeclare */

export type InvestigationStatus = 'PENDING' | 'DONE' | 'DISCARDED';

export const InvestigationStatus = {
  PENDING: 'PENDING' as InvestigationStatus,
  DONE: 'DONE' as InvestigationStatus,
  DISCARDED: 'DISCARDED' as InvestigationStatus,
};
