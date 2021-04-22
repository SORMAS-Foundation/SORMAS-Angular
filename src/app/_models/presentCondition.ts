/* eslint-disable @typescript-eslint/no-redeclare */

export type PresentCondition = 'ALIVE' | 'DEAD' | 'BURIED' | 'UNKNOWN';

export const PresentCondition = {
  ALIVE: 'Alive' as PresentCondition,
  DEAD: 'Dead' as PresentCondition,
  BURIED: 'Buried' as PresentCondition,
  UNKNOWN: 'Unknown' as PresentCondition,
};
