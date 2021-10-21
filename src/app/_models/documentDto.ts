import { DocumentRelatedEntityType } from './documentRelatedEntityType';
import { DocumentWorkflowType } from './documentWorkflowType';
import { UserReferenceDto } from './userReferenceDto';

export interface DocumentDto {
  uuid?: string;
  uploadingUser?: UserReferenceDto;
  name?: string;
  path?: string;
  contentType?: string;
  size?: number;
  relatedEntityUuid?: string;
  relatedEntityType?: DocumentRelatedEntityType;
  workflow?: DocumentWorkflowType;
}
