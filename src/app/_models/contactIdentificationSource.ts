/* eslint-disable @typescript-eslint/no-redeclare */

export type ContactIdentificationSource =
  | 'CASE_PERSON'
  | 'CONTACT_PERSON'
  | 'TRACING_APP'
  | 'OTHER'
  | 'UNKNOWN';

export const ContactIdentificationSource = {
  CASEPERSON: 'CASE_PERSON' as ContactIdentificationSource,
  CONTACTPERSON: 'CONTACT_PERSON' as ContactIdentificationSource,
  TRACINGAPP: 'TRACING_APP' as ContactIdentificationSource,
  OTHER: 'OTHER' as ContactIdentificationSource,
  UNKNOWN: 'UNKNOWN' as ContactIdentificationSource,
};
