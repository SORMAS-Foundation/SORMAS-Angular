import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_IMMUNIZATION_EDIT } from '../../_constants/actions';

export const actionsEditDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionArchive',
    action: ACTIONS_IMMUNIZATION_EDIT.ARCHIVE,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionDelete',
    action: ACTIONS_IMMUNIZATION_EDIT.DELETE,
    className: 'warn',
  },
];
