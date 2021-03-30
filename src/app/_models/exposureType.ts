/* eslint-disable @typescript-eslint/no-redeclare */

export type ExposureType =
  | 'WORK'
  | 'TRAVEL'
  | 'SPORT'
  | 'VISIT'
  | 'GATHERING'
  | 'HABITATION'
  | 'PERSONAL_SERVICES'
  | 'BURIAL'
  | 'ANIMAL_CONTACT'
  | 'OTHER'
  | 'UNKNOWN';

export const ExposureType = {
  WORK: 'WORK' as ExposureType,
  TRAVEL: 'TRAVEL' as ExposureType,
  SPORT: 'SPORT' as ExposureType,
  VISIT: 'VISIT' as ExposureType,
  GATHERING: 'GATHERING' as ExposureType,
  HABITATION: 'HABITATION' as ExposureType,
  PERSONALSERVICES: 'PERSONAL_SERVICES' as ExposureType,
  BURIAL: 'BURIAL' as ExposureType,
  ANIMALCONTACT: 'ANIMAL_CONTACT' as ExposureType,
  OTHER: 'OTHER' as ExposureType,
  UNKNOWN: 'UNKNOWN' as ExposureType,
};
