/* eslint-disable @typescript-eslint/no-redeclare */

export type EventInvestigationStatus = 'PENDING' | 'ONGOING' | 'DONE' | 'DISCARDED';

export const EventInvestigationStatus = {
  PENDING: 'PENDING' as EventInvestigationStatus,
  ONGOING: 'ONGOING' as EventInvestigationStatus,
  DONE: 'DONE' as EventInvestigationStatus,
  DISCARDED: 'DISCARDED' as EventInvestigationStatus,
};
