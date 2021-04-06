/* eslint-disable @typescript-eslint/no-redeclare */

export type CompatibilityCheckResponse = 'COMPATIBLE' | 'TOO_OLD' | 'TOO_NEW';

export const CompatibilityCheckResponse = {
  COMPATIBLE: 'COMPATIBLE' as CompatibilityCheckResponse,
  TOOOLD: 'TOO_OLD' as CompatibilityCheckResponse,
  TOONEW: 'TOO_NEW' as CompatibilityCheckResponse,
};
