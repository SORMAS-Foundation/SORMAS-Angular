/* eslint-disable @typescript-eslint/no-redeclare */

export type Salutation = 'MR' | 'MRS' | 'MR_AND_MRS' | 'FAMILY' | 'GUARDIAN_OF_MINOR' | 'OTHER';

export const Salutation = {
  MR: 'Mr' as Salutation,
  MRS: 'Mrs' as Salutation,
  MRANDMRS: 'Mr and Mrs' as Salutation,
  FAMILY: 'Family' as Salutation,
  GUARDIANOFMINOR: 'Guardian of minor' as Salutation,
  OTHER: 'Other' as Salutation,
};
