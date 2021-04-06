/* eslint-disable @typescript-eslint/no-redeclare */

export type ContactRelation =
  | 'SAME_HOUSEHOLD'
  | 'FAMILY_MEMBER_OR_FRIEND'
  | 'SAME_ENVIRONMENT'
  | 'MEDICAL_CARE'
  | 'OTHER';

export const ContactRelation = {
  SAMEHOUSEHOLD: 'SAME_HOUSEHOLD' as ContactRelation,
  FAMILYMEMBERORFRIEND: 'FAMILY_MEMBER_OR_FRIEND' as ContactRelation,
  SAMEENVIRONMENT: 'SAME_ENVIRONMENT' as ContactRelation,
  MEDICALCARE: 'MEDICAL_CARE' as ContactRelation,
  OTHER: 'OTHER' as ContactRelation,
};
