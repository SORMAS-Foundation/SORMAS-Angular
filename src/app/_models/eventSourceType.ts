/* eslint-disable @typescript-eslint/no-redeclare */

export type EventSourceType =
  | 'NOT_APPLICABLE'
  | 'MEDIA_NEWS'
  | 'HOTLINE_PERSON'
  | 'MATHEMATICAL_MODEL'
  | 'INSTITUTIONAL_PARTNER';

export const EventSourceType = {
  NOTAPPLICABLE: 'NOT_APPLICABLE' as EventSourceType,
  MEDIANEWS: 'MEDIA_NEWS' as EventSourceType,
  HOTLINEPERSON: 'HOTLINE_PERSON' as EventSourceType,
  MATHEMATICALMODEL: 'MATHEMATICAL_MODEL' as EventSourceType,
  INSTITUTIONALPARTNER: 'INSTITUTIONAL_PARTNER' as EventSourceType,
};
