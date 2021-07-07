import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_BULK_EDIT } from '../../_constants/actions';
import { EventEditComponent } from '../event-edit/event-edit.component';

export const actionsBulkEditDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'Edit',
    action: ACTIONS_BULK_EDIT.EDIT,
    component: EventEditComponent,
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
  {
    role: NavItemRole.ACTION,
    name: 'Group',
    action: ACTIONS_BULK_EDIT.GROUP,
  },
  {
    role: NavItemRole.ACTION,
    name: 'Send to reporting tool',
    action: ACTIONS_BULK_EDIT.REPORTING_TOOL,
  },
];
