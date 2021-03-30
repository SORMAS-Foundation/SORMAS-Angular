/* eslint-disable @typescript-eslint/no-redeclare */

export type ContactCategory =
  | 'HIGH_RISK'
  | 'HIGH_RISK_MED'
  | 'MEDIUM_RISK_MED'
  | 'LOW_RISK'
  | 'NO_RISK';

export const ContactCategory = {
  HIGHRISK: 'HIGH_RISK' as ContactCategory,
  HIGHRISKMED: 'HIGH_RISK_MED' as ContactCategory,
  MEDIUMRISKMED: 'MEDIUM_RISK_MED' as ContactCategory,
  LOWRISK: 'LOW_RISK' as ContactCategory,
  NORISK: 'NO_RISK' as ContactCategory,
};
