import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_EVENT_EDIT } from '../../_constants/actions';

export const actionsEditDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionArchiveCoreEntity',
    action: ACTIONS_EVENT_EDIT.ARCHIVE,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionDelete',
    action: ACTIONS_EVENT_EDIT.DELETE,
    className: 'warn',
  },
];
