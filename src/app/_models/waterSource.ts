/* eslint-disable @typescript-eslint/no-redeclare */

export type WaterSource =
  | 'PIPE_NETWORK'
  | 'COMMUNITY_BOREHOLE_WELL'
  | 'PRIVATE_BOREHOLE_WELL'
  | 'STREAM'
  | 'OTHER';

export const WaterSource = {
  PIPENETWORK: 'PIPE_NETWORK' as WaterSource,
  COMMUNITYBOREHOLEWELL: 'COMMUNITY_BOREHOLE_WELL' as WaterSource,
  PRIVATEBOREHOLEWELL: 'PRIVATE_BOREHOLE_WELL' as WaterSource,
  STREAM: 'STREAM' as WaterSource,
  OTHER: 'OTHER' as WaterSource,
};
