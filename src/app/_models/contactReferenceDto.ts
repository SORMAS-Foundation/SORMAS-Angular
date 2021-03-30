import { PersonName } from './personName';

export interface ContactReferenceDto {
  uuid: string;
  caption?: string;
  contactName?: PersonName;
  caseName?: PersonName;
  captionAlwaysWithUuid?: string;
}
