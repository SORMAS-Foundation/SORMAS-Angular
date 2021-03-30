import { UserRight } from './userRight';
import { UserRole } from './userRole';

export interface UserRoleConfigDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  userRole?: UserRole;
  userRights?: Array<UserRight>;
}
