import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_BULK_EDIT } from '../../_constants/actions';
import { TaskEditComponent } from '../task-edit/task-edit.component';

export const actionsBulkEditDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'Edit',
    action: ACTIONS_BULK_EDIT.EDIT,
    component: TaskEditComponent,
  },
  {
    role: NavItemRole.ACTION,
    name: 'Delete',
    action: ACTIONS_BULK_EDIT.DELETE,
    className: 'warn',
  },
  {
    role: NavItemRole.ACTION,
    name: 'Archive',
    action: ACTIONS_BULK_EDIT.ARCHIVE,
  },
];
