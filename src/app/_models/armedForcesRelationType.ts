/* eslint-disable @typescript-eslint/no-redeclare */

export type ArmedForcesRelationType = 'UNKNOWN' | 'NO_RELATION' | 'CIVIL' | 'SOLDIER_OR_RELATIVE';

export const ArmedForcesRelationType = {
  UNKNOWN: 'UNKNOWN' as ArmedForcesRelationType,
  NORELATION: 'NO_RELATION' as ArmedForcesRelationType,
  CIVIL: 'CIVIL' as ArmedForcesRelationType,
  SOLDIERORRELATIVE: 'SOLDIER_OR_RELATIVE' as ArmedForcesRelationType,
};
