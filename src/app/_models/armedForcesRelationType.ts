/* eslint-disable @typescript-eslint/no-redeclare */

export type ArmedForcesRelationType = 'UNKNOWN' | 'NO_RELATION' | 'CIVIL' | 'SOLDIER_OR_RELATIVE';

export const ArmedForcesRelationType = {
  UNKNOWN: 'Unknown' as ArmedForcesRelationType,
  NORELATION: 'No relation' as ArmedForcesRelationType,
  CIVIL: 'Civil' as ArmedForcesRelationType,
  SOLDIERORRELATIVE: 'Soldier or relative' as ArmedForcesRelationType,
};
