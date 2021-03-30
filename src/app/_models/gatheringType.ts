/* eslint-disable @typescript-eslint/no-redeclare */

export type GatheringType =
  | 'PARTY'
  | 'RELIGIOUS'
  | 'MUSICAL'
  | 'DEMONSTRATION'
  | 'CARNIVAL'
  | 'FAIR'
  | 'SPORTING_EVENT'
  | 'OTHER';

export const GatheringType = {
  PARTY: 'PARTY' as GatheringType,
  RELIGIOUS: 'RELIGIOUS' as GatheringType,
  MUSICAL: 'MUSICAL' as GatheringType,
  DEMONSTRATION: 'DEMONSTRATION' as GatheringType,
  CARNIVAL: 'CARNIVAL' as GatheringType,
  FAIR: 'FAIR' as GatheringType,
  SPORTINGEVENT: 'SPORTING_EVENT' as GatheringType,
  OTHER: 'OTHER' as GatheringType,
};
