/* eslint-disable @typescript-eslint/no-redeclare */

export type PushResult = 'OK' | 'TOO_OLD' | 'ERROR';

export const PushResult = {
  OK: 'OK' as PushResult,
  TOOOLD: 'TOO_OLD' as PushResult,
  ERROR: 'ERROR' as PushResult,
};
