import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_BULK_EDIT, ACTIONS_TASK } from '../../_constants/actions';
import { TaskEditComponent } from '../task-edit/task-edit.component';

export const actionsBulkEditDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.edit',
    action: ACTIONS_BULK_EDIT.EDIT,
    component: TaskEditComponent,
    componentTitle: 'Edit task',
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionDelete',
    action: ACTIONS_BULK_EDIT.DELETE,
    className: 'warn',
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionArchiveCoreEntity',
    action: ACTIONS_BULK_EDIT.ARCHIVE,
  },
];

export const actionsMoreDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportBasic',
    action: ACTIONS_TASK.BASIC_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportDetailed',
    action: ACTIONS_TASK.DETAILED_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportCustom',
    action: ACTIONS_TASK.CUSTOM_EXPORT,
  },
];
