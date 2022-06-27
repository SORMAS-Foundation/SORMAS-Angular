import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_BULK_EDIT } from '../../_constants/actions';

export const actionsBulkEditDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionDelete',
    action: ACTIONS_BULK_EDIT.DELETE,
    className: 'warn',
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.bulkEditAssignee',
    action: ACTIONS_BULK_EDIT.EDIT,
  },
];
