/* eslint-disable @typescript-eslint/no-redeclare */

export type MeansOfTransport =
  | 'LOCAL_PUBLIC_TRANSPORT'
  | 'BUS'
  | 'FERRY'
  | 'PLANE'
  | 'TRAIN'
  | 'OTHER';

export const MeansOfTransport = {
  LOCALPUBLICTRANSPORT: 'LOCAL_PUBLIC_TRANSPORT' as MeansOfTransport,
  BUS: 'BUS' as MeansOfTransport,
  FERRY: 'FERRY' as MeansOfTransport,
  PLANE: 'PLANE' as MeansOfTransport,
  TRAIN: 'TRAIN' as MeansOfTransport,
  OTHER: 'OTHER' as MeansOfTransport,
};
