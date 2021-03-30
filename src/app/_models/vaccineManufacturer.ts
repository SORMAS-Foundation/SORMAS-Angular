/* eslint-disable @typescript-eslint/no-redeclare */

export type VaccineManufacturer =
  | 'BIONTECH_PFIZER'
  | 'MODERNA'
  | 'ASTRA_ZENECA'
  | 'JOHNSON_JOHNSON'
  | 'NOVAVAX'
  | 'SANOFI_GSK'
  | 'UNKNOWN'
  | 'OTHER';

export const VaccineManufacturer = {
  BIONTECHPFIZER: 'BIONTECH_PFIZER' as VaccineManufacturer,
  MODERNA: 'MODERNA' as VaccineManufacturer,
  ASTRAZENECA: 'ASTRA_ZENECA' as VaccineManufacturer,
  JOHNSONJOHNSON: 'JOHNSON_JOHNSON' as VaccineManufacturer,
  NOVAVAX: 'NOVAVAX' as VaccineManufacturer,
  SANOFIGSK: 'SANOFI_GSK' as VaccineManufacturer,
  UNKNOWN: 'UNKNOWN' as VaccineManufacturer,
  OTHER: 'OTHER' as VaccineManufacturer,
};
