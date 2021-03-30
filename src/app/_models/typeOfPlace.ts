/* eslint-disable @typescript-eslint/no-redeclare */

export type TypeOfPlace =
  | 'FACILITY'
  | 'FESTIVITIES'
  | 'HOME'
  | 'MEANS_OF_TRANSPORT'
  | 'PUBLIC_PLACE'
  | 'SCATTERED'
  | 'UNKNOWN'
  | 'OTHER';

export const TypeOfPlace = {
  FACILITY: 'FACILITY' as TypeOfPlace,
  FESTIVITIES: 'FESTIVITIES' as TypeOfPlace,
  HOME: 'HOME' as TypeOfPlace,
  MEANSOFTRANSPORT: 'MEANS_OF_TRANSPORT' as TypeOfPlace,
  PUBLICPLACE: 'PUBLIC_PLACE' as TypeOfPlace,
  SCATTERED: 'SCATTERED' as TypeOfPlace,
  UNKNOWN: 'UNKNOWN' as TypeOfPlace,
  OTHER: 'OTHER' as TypeOfPlace,
};
