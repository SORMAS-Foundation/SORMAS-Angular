/* eslint-disable @typescript-eslint/no-redeclare */

export type FollowUpStatus = 'FOLLOW_UP' | 'COMPLETED' | 'CANCELED' | 'LOST' | 'NO_FOLLOW_UP';

export const FollowUpStatus = {
  FOLLOWUP: 'FOLLOW_UP' as FollowUpStatus,
  COMPLETED: 'COMPLETED' as FollowUpStatus,
  CANCELED: 'CANCELED' as FollowUpStatus,
  LOST: 'LOST' as FollowUpStatus,
  NOFOLLOWUP: 'NO_FOLLOW_UP' as FollowUpStatus,
};
