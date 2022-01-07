import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_IMMUNIZATION_EDIT } from '../../_constants/actions';

export const actionsEditDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'archive',
    action: ACTIONS_IMMUNIZATION_EDIT.ARCHIVE,
  },
  {
    role: NavItemRole.ACTION,
    name: 'delete',
    action: ACTIONS_IMMUNIZATION_EDIT.DELETE,
    className: 'warn',
  },
];
