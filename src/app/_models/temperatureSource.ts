/* eslint-disable @typescript-eslint/no-redeclare */

export type TemperatureSource = 'AXILLARY' | 'ORAL' | 'RECTAL' | 'NON_CONTACT';

export const TemperatureSource = {
  AXILLARY: 'AXILLARY' as TemperatureSource,
  ORAL: 'ORAL' as TemperatureSource,
  RECTAL: 'RECTAL' as TemperatureSource,
  NONCONTACT: 'NON_CONTACT' as TemperatureSource,
};
