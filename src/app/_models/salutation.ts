/* eslint-disable @typescript-eslint/no-redeclare */

export type Salutation = 'MR' | 'MRS' | 'MR_AND_MRS' | 'FAMILY' | 'GUARDIAN_OF_MINOR' | 'OTHER';

export const Salutation = {
  MR: 'MR' as Salutation,
  MRS: 'MRS' as Salutation,
  MRANDMRS: 'MR_AND_MRS' as Salutation,
  FAMILY: 'FAMILY' as Salutation,
  GUARDIANOFMINOR: 'GUARDIAN_OF_MINOR' as Salutation,
  OTHER: 'OTHER' as Salutation,
};
