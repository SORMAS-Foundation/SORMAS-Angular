import { CaseIndexDto } from './caseIndexDto';

export interface MergeDuplicateDto {
  id?: number;
  uuid?: string;
  child: CaseIndexDto;
  parent: CaseIndexDto;
}
