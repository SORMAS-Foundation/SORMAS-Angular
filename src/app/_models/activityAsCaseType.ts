/* eslint-disable @typescript-eslint/no-redeclare */

export type ActivityAsCaseType =
  | 'WORK'
  | 'TRAVEL'
  | 'SPORT'
  | 'VISIT'
  | 'GATHERING'
  | 'HABITATION'
  | 'PERSONAL_SERVICES'
  | 'OTHER'
  | 'UNKNOWN';

export const ActivityAsCaseType = {
  WORK: 'WORK' as ActivityAsCaseType,
  TRAVEL: 'TRAVEL' as ActivityAsCaseType,
  SPORT: 'SPORT' as ActivityAsCaseType,
  VISIT: 'VISIT' as ActivityAsCaseType,
  GATHERING: 'GATHERING' as ActivityAsCaseType,
  HABITATION: 'HABITATION' as ActivityAsCaseType,
  PERSONALSERVICES: 'PERSONAL_SERVICES' as ActivityAsCaseType,
  OTHER: 'OTHER' as ActivityAsCaseType,
  UNKNOWN: 'UNKNOWN' as ActivityAsCaseType,
};
