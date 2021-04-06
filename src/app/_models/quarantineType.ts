/* eslint-disable @typescript-eslint/no-redeclare */

export type QuarantineType =
  | 'HOME'
  | 'INSTITUTIONELL'
  | 'HOSPITAL'
  | 'HOTEL'
  | 'ASYLUM_ACCOMMODATION'
  | 'NONE'
  | 'UNKNOWN'
  | 'OTHER';

export const QuarantineType = {
  HOME: 'HOME' as QuarantineType,
  INSTITUTIONELL: 'INSTITUTIONELL' as QuarantineType,
  HOSPITAL: 'HOSPITAL' as QuarantineType,
  HOTEL: 'HOTEL' as QuarantineType,
  ASYLUMACCOMMODATION: 'ASYLUM_ACCOMMODATION' as QuarantineType,
  NONE: 'NONE' as QuarantineType,
  UNKNOWN: 'UNKNOWN' as QuarantineType,
  OTHER: 'OTHER' as QuarantineType,
};
