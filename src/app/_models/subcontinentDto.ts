import { ContinentDto } from './continentDto';

export interface SubcontinentDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  defaultName?: string;
  archived?: boolean;
  externalId?: string;
  continent?: ContinentDto;
}
