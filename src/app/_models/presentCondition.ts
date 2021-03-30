/* eslint-disable @typescript-eslint/no-redeclare */

export type PresentCondition = 'ALIVE' | 'DEAD' | 'BURIED' | 'UNKNOWN';

export const PresentCondition = {
  ALIVE: 'ALIVE' as PresentCondition,
  DEAD: 'DEAD' as PresentCondition,
  BURIED: 'BURIED' as PresentCondition,
  UNKNOWN: 'UNKNOWN' as PresentCondition,
};
