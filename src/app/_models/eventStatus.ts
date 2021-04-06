/* eslint-disable @typescript-eslint/no-redeclare */

export type EventStatus = 'SIGNAL' | 'EVENT' | 'SCREENING' | 'CLUSTER' | 'DROPPED';

export const EventStatus = {
  SIGNAL: 'SIGNAL' as EventStatus,
  EVENT: 'EVENT' as EventStatus,
  SCREENING: 'SCREENING' as EventStatus,
  CLUSTER: 'CLUSTER' as EventStatus,
  DROPPED: 'DROPPED' as EventStatus,
};
