/* eslint-disable @typescript-eslint/no-redeclare */

export type ContactClassification = 'UNCONFIRMED' | 'CONFIRMED' | 'NO_CONTACT';

export const ContactClassification = {
  UNCONFIRMED: 'UNCONFIRMED' as ContactClassification,
  CONFIRMED: 'CONFIRMED' as ContactClassification,
  NO_CONTACT: 'NO_CONTACT' as ContactClassification,
};
