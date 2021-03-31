/* eslint-disable @typescript-eslint/no-redeclare */

export type TaskStatus = 'PENDING' | 'DONE' | 'REMOVED' | 'NOT_EXECUTABLE';

export const TaskStatus = {
  PENDING: 'PENDING' as TaskStatus,
  DONE: 'DONE' as TaskStatus,
  REMOVED: 'REMOVED' as TaskStatus,
  NOTEXECUTABLE: 'NOT_EXECUTABLE' as TaskStatus,
};
