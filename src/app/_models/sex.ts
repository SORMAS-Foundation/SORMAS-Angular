/* eslint-disable @typescript-eslint/no-redeclare */

export type Sex = 'MALE' | 'FEMALE' | 'OTHER' | 'UNKNOWN';

export const Sex = {
  MALE: 'Male' as Sex,
  FEMALE: 'Female' as Sex,
  OTHER: 'Other' as Sex,
  UNKNOWN: 'Unknown' as Sex,
};
