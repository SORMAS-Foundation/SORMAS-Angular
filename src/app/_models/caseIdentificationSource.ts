/* eslint-disable @typescript-eslint/no-redeclare */

export type CaseIdentificationSource =
  | 'UNKNOWN'
  | 'OUTBREAK_INVESTIGATION'
  | 'CONTACT_TRACKING_APP'
  | 'SUSPICION_REPORT'
  | 'CONTACT_TRACING'
  | 'SCREENING'
  | 'OTHER';

export const CaseIdentificationSource = {
  UNKNOWN: 'UNKNOWN' as CaseIdentificationSource,
  OUTBREAKINVESTIGATION: 'OUTBREAK_INVESTIGATION' as CaseIdentificationSource,
  CONTACTTRACKINGAPP: 'CONTACT_TRACKING_APP' as CaseIdentificationSource,
  SUSPICIONREPORT: 'SUSPICION_REPORT' as CaseIdentificationSource,
  CONTACTTRACING: 'CONTACT_TRACING' as CaseIdentificationSource,
  SCREENING: 'SCREENING' as CaseIdentificationSource,
  OTHER: 'OTHER' as CaseIdentificationSource,
};
