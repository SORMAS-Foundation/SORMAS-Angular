/* eslint-disable @typescript-eslint/no-redeclare */

export type EndOfIsolationReason = 'RECOVERED' | 'DIED' | 'LOST_TO_FOLLOW_UP' | 'OTHER';

export const EndOfIsolationReason = {
  RECOVERED: 'RECOVERED' as EndOfIsolationReason,
  DIED: 'DIED' as EndOfIsolationReason,
  LOSTTOFOLLOWUP: 'LOST_TO_FOLLOW_UP' as EndOfIsolationReason,
  OTHER: 'OTHER' as EndOfIsolationReason,
};
