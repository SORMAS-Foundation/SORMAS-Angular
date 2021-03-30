/* eslint-disable @typescript-eslint/no-redeclare */

export type InstitutionalPartnerType =
  | 'HEALTH_INSURANCE'
  | 'TERRITORIAL_COMMUNITIES'
  | 'NATIONAL_EDUCATION'
  | 'HEALTH_ESTABLISHMENTS'
  | 'MEDICO_SOCIAL_ESTABLISHMENTS'
  | 'OTHER';

export const InstitutionalPartnerType = {
  HEALTHINSURANCE: 'HEALTH_INSURANCE' as InstitutionalPartnerType,
  TERRITORIALCOMMUNITIES: 'TERRITORIAL_COMMUNITIES' as InstitutionalPartnerType,
  NATIONALEDUCATION: 'NATIONAL_EDUCATION' as InstitutionalPartnerType,
  HEALTHESTABLISHMENTS: 'HEALTH_ESTABLISHMENTS' as InstitutionalPartnerType,
  MEDICOSOCIALESTABLISHMENTS: 'MEDICO_SOCIAL_ESTABLISHMENTS' as InstitutionalPartnerType,
  OTHER: 'OTHER' as InstitutionalPartnerType,
};
