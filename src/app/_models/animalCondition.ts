/* eslint-disable @typescript-eslint/no-redeclare */

export type AnimalCondition = 'ALIVE' | 'DEAD' | 'PROCESSED' | 'UNKNOWN';

export const AnimalCondition = {
  ALIVE: 'ALIVE' as AnimalCondition,
  DEAD: 'DEAD' as AnimalCondition,
  PROCESSED: 'PROCESSED' as AnimalCondition,
  UNKNOWN: 'UNKNOWN' as AnimalCondition,
};
