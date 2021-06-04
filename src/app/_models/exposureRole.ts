/* eslint-disable @typescript-eslint/no-redeclare */

export type ExposureRole =
  | 'PASSENGER'
  | 'STAFF'
  | 'NURSING_STAFF'
  | 'MEDICAL_STAFF'
  | 'VISITOR'
  | 'GUEST'
  | 'CUSTOMER'
  | 'CONSERVATEE'
  | 'PATIENT'
  | 'EDUCATOR'
  | 'TRAINEE_TEACHER'
  | 'PUPIL'
  | 'STUDENT'
  | 'PARENT'
  | 'TEACHER'
  | 'UNKNOWN'
  | 'OTHER';

export const ExposureRole = {
  PASSENGER: 'PASSENGER' as ExposureRole,
  STAFF: 'STAFF' as ExposureRole,
  NURSINGSTAFF: 'NURSING_STAFF' as ExposureRole,
  MEDICALSTAFF: 'MEDICAL_STAFF' as ExposureRole,
  VISITOR: 'VISITOR' as ExposureRole,
  GUEST: 'GUEST' as ExposureRole,
  CUSTOMER: 'CUSTOMER' as ExposureRole,
  CONSERVATEE: 'CONSERVATEE' as ExposureRole,
  PATIENT: 'PATIENT' as ExposureRole,
  EDUCATOR: 'EDUCATOR' as ExposureRole,
  TRAINEETEACHER: 'TRAINEE_TEACHER' as ExposureRole,
  PUPIL: 'PUPIL' as ExposureRole,
  STUDENT: 'STUDENT' as ExposureRole,
  PARENT: 'PARENT' as ExposureRole,
  TEACHER: 'TEACHER' as ExposureRole,
  UNKNOWN: 'UNKNOWN' as ExposureRole,
  OTHER: 'OTHER' as ExposureRole,
};
