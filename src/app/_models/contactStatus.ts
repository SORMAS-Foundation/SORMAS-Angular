/* eslint-disable @typescript-eslint/no-redeclare */

export type ContactStatus = 'ACTIVE' | 'CONVERTED' | 'DROPPED';

export const ContactStatus = {
  ACTIVE: 'ACTIVE' as ContactStatus,
  CONVERTED: 'CONVERTED' as ContactStatus,
  DROPPED: 'DROPPED' as ContactStatus,
};
