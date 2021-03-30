/* eslint-disable @typescript-eslint/no-redeclare */

export type PointOfEntryType = 'AIRPORT' | 'SEAPORT' | 'GROUND_CROSSING' | 'OTHER';

export const PointOfEntryType = {
  AIRPORT: 'AIRPORT' as PointOfEntryType,
  SEAPORT: 'SEAPORT' as PointOfEntryType,
  GROUNDCROSSING: 'GROUND_CROSSING' as PointOfEntryType,
  OTHER: 'OTHER' as PointOfEntryType,
};
