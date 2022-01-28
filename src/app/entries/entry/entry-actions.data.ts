import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_ENTRY_EDIT } from '../../_constants/actions';

export const actionsEditDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionDelete',
    action: ACTIONS_ENTRY_EDIT.DELETE,
    className: 'warn',
  },
];
