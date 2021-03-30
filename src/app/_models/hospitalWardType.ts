/* eslint-disable @typescript-eslint/no-redeclare */

export type HospitalWardType =
  | 'PEDIATRIC_INPATIENT'
  | 'NURSERY'
  | 'EPU'
  | 'CHER'
  | 'OPD'
  | 'EYE'
  | 'ENT'
  | 'CARDIOLOGY'
  | 'OTHER';

export const HospitalWardType = {
  PEDIATRICINPATIENT: 'PEDIATRIC_INPATIENT' as HospitalWardType,
  NURSERY: 'NURSERY' as HospitalWardType,
  EPU: 'EPU' as HospitalWardType,
  CHER: 'CHER' as HospitalWardType,
  OPD: 'OPD' as HospitalWardType,
  EYE: 'EYE' as HospitalWardType,
  ENT: 'ENT' as HospitalWardType,
  CARDIOLOGY: 'CARDIOLOGY' as HospitalWardType,
  OTHER: 'OTHER' as HospitalWardType,
};
