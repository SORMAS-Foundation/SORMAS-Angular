/* eslint-disable @typescript-eslint/no-redeclare */

export type QuarantineReason =
  | 'IDENTIFIED_BY_CONTACT_TRACING'
  | 'ENTRY_FROM_RISK_AREA'
  | 'SWISS_COVID_APP_NOTIFICATION'
  | 'OTHER_REASON';

export const QuarantineReason = {
  IDENTIFIEDBYCONTACTTRACING: 'IDENTIFIED_BY_CONTACT_TRACING' as QuarantineReason,
  ENTRYFROMRISKAREA: 'ENTRY_FROM_RISK_AREA' as QuarantineReason,
  SWISSCOVIDAPPNOTIFICATION: 'SWISS_COVID_APP_NOTIFICATION' as QuarantineReason,
  OTHERREASON: 'OTHER_REASON' as QuarantineReason,
};
