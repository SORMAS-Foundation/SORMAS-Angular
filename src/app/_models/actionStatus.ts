/* eslint-disable @typescript-eslint/no-redeclare */

export type ActionStatus = 'PENDING' | 'IN_PROGRESS' | 'DONE';

export const ActionStatus = {
  PENDING: 'PENDING' as ActionStatus,
  INPROGRESS: 'IN_PROGRESS' as ActionStatus,
  DONE: 'DONE' as ActionStatus,
};
