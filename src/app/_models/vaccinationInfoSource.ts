/* eslint-disable @typescript-eslint/no-redeclare */

export type VaccinationInfoSource =
  | 'VACCINATION_CARD'
  | 'ORAL_COMMUNICATION'
  | 'NO_EVIDENCE'
  | 'UNKNOWN';

export const VaccinationInfoSource = {
  VACCINATIONCARD: 'VACCINATION_CARD' as VaccinationInfoSource,
  ORALCOMMUNICATION: 'ORAL_COMMUNICATION' as VaccinationInfoSource,
  NOEVIDENCE: 'NO_EVIDENCE' as VaccinationInfoSource,
  UNKNOWN: 'UNKNOWN' as VaccinationInfoSource,
};
