/* eslint-disable @typescript-eslint/no-redeclare */

export type HospitalizationReasonType = 'REPORTED_DISEASE' | 'OTHER' | 'UNKNOWN';

export const HospitalizationReasonType = {
  REPORTEDDISEASE: 'REPORTED_DISEASE' as HospitalizationReasonType,
  OTHER: 'OTHER' as HospitalizationReasonType,
  UNKNOWN: 'UNKNOWN' as HospitalizationReasonType,
};
