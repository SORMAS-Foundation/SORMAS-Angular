/* eslint-disable @typescript-eslint/no-redeclare */

export type VisitStatus = 'UNAVAILABLE' | 'UNCOOPERATIVE' | 'COOPERATIVE';

export const VisitStatus = {
  UNAVAILABLE: 'UNAVAILABLE' as VisitStatus,
  UNCOOPERATIVE: 'UNCOOPERATIVE' as VisitStatus,
  COOPERATIVE: 'COOPERATIVE' as VisitStatus,
};
