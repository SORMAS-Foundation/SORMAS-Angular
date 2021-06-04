import { CaseReferenceDto } from './caseReferenceDto';
import { ContactReferenceDto } from './contactReferenceDto';
import { EventReferenceDto } from './eventReferenceDto';
import { ReferenceDto } from './referenceDto';
import { TaskContext } from './taskContext';
import { TaskPriority } from './taskPriority';
import { TaskStatus } from './taskStatus';
import { TaskType } from './taskType';
import { UserReferenceDto } from './userReferenceDto';

export interface TaskDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  taskContext: TaskContext;
  caze?: CaseReferenceDto;
  event?: EventReferenceDto;
  contact?: ContactReferenceDto;
  taskType: TaskType;
  priority?: TaskPriority;
  dueDate: Date;
  suggestedStart?: Date;
  taskStatus?: TaskStatus;
  statusChangeDate?: Date;
  perceivedStart?: Date;
  creatorUser?: UserReferenceDto;
  creatorComment?: string;
  assigneeUser: UserReferenceDto;
  assigneeReply?: string;
  closedLat?: number;
  closedLon?: number;
  closedLatLonAccuracy?: number;
  contextReference?: ReferenceDto;
}
