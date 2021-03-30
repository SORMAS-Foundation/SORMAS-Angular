import { ActionContext } from './actionContext';
import { ActionMeasure } from './actionMeasure';
import { ActionPriority } from './actionPriority';
import { ActionStatus } from './actionStatus';
import { EventReferenceDto } from './eventReferenceDto';
import { ReferenceDto } from './referenceDto';
import { UserReferenceDto } from './userReferenceDto';

export interface ActionDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  actionContext: ActionContext;
  event?: EventReferenceDto;
  actionMeasure?: ActionMeasure;
  priority?: ActionPriority;
  date: Date;
  actionStatus?: ActionStatus;
  statusChangeDate?: Date;
  creatorUser?: UserReferenceDto;
  title?: string;
  description?: string;
  reply?: string;
  lastModifiedBy?: UserReferenceDto;
  contextReference?: ReferenceDto;
}
