import { FollowUpStatus } from './followUpStatus';
import { Sex } from './sex';

export interface JournalPersonDto {
  uuid?: string;
  pseudonymized?: boolean;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  phone?: string;
  birthdateDD?: number;
  birthdateMM?: number;
  birthdateYYYY?: number;
  sex?: Sex;
  latestFollowUpEndDate?: Date;
  followUpStatus?: FollowUpStatus;
}
