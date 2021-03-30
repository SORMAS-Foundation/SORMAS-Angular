import { PointOfEntryType } from './pointOfEntryType';

export interface PointOfEntryReferenceDto {
  uuid: string;
  caption?: string;
  externalId?: string;
  pointOfEntryType?: PointOfEntryType;
  otherPointOfEntry?: boolean;
}
