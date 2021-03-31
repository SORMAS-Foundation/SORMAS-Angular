import { Disease } from './disease';

export interface DiseaseConfigurationDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  disease?: Disease;
  active?: boolean;
  primaryDisease?: boolean;
  caseBased?: boolean;
  followUpEnabled?: boolean;
  followUpDuration?: number;
  caseFollowUpDuration?: number;
  eventParticipantFollowUpDuration?: number;
}
