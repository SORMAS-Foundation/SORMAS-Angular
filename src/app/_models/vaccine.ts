/* eslint-disable @typescript-eslint/no-redeclare */

export type Vaccine =
  | 'COMIRNATY'
  | 'MRNA_1273'
  | 'OXFORD_ASTRA_ZENECA'
  | 'AD26_COV2_S'
  | 'NVX_COV_2373'
  | 'SANOFI_GSK'
  | 'UNKNOWN'
  | 'OTHER';

export const Vaccine = {
  COMIRNATY: 'COMIRNATY' as Vaccine,
  MRNA1273: 'MRNA_1273' as Vaccine,
  OXFORDASTRAZENECA: 'OXFORD_ASTRA_ZENECA' as Vaccine,
  AD26COV2S: 'AD26_COV2_S' as Vaccine,
  NVXCOV2373: 'NVX_COV_2373' as Vaccine,
  SANOFIGSK: 'SANOFI_GSK' as Vaccine,
  UNKNOWN: 'UNKNOWN' as Vaccine,
  OTHER: 'OTHER' as Vaccine,
};
