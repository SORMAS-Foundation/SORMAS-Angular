/* eslint-disable @typescript-eslint/no-redeclare */

export type EndOfQuarantineReason =
  | 'ASYMPTOMATIC'
  | 'ISOLATED_AS_CASE'
  | 'LOST_TO_FOLLOWUP'
  | 'OTHER';

export const EndOfQuarantineReason = {
  ASYMPTOMATIC: 'ASYMPTOMATIC' as EndOfQuarantineReason,
  ISOLATEDASCASE: 'ISOLATED_AS_CASE' as EndOfQuarantineReason,
  LOSTTOFOLLOWUP: 'LOST_TO_FOLLOWUP' as EndOfQuarantineReason,
  OTHER: 'OTHER' as EndOfQuarantineReason,
};
