import { ACTIONS_CASE_FOLLOW_UP } from '../../../app.constants';
import { NavItem, NavItemRole } from '../../../_models/common';

export const actionsMoreDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportBasic',
    action: ACTIONS_CASE_FOLLOW_UP.BASIC_EXPORT,
  },
];
