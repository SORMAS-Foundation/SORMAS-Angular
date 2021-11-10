import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_CONTACT_EDIT } from '../../_constants/actions';

export const actionsEditDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionDelete',
    action: ACTIONS_CONTACT_EDIT.DELETE,
    className: 'warn',
  },
];
