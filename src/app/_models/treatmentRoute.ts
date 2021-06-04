/* eslint-disable @typescript-eslint/no-redeclare */

export type TreatmentRoute = 'ORAL' | 'IV' | 'RECTAL' | 'TOPICAL' | 'OTHER';

export const TreatmentRoute = {
  ORAL: 'ORAL' as TreatmentRoute,
  IV: 'IV' as TreatmentRoute,
  RECTAL: 'RECTAL' as TreatmentRoute,
  TOPICAL: 'TOPICAL' as TreatmentRoute,
  OTHER: 'OTHER' as TreatmentRoute,
};
