import { ACTIONS_VIEW_OPTIONS } from '../../app.constants';
import { NavItem, NavItemRole } from '../../_models/common';

export const actionsViewOptionsDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.caseDefaultView',
    action: ACTIONS_VIEW_OPTIONS.DEFAULT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.caseDetailedView',
    action: ACTIONS_VIEW_OPTIONS.DETAILED,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.caseFollowupVisitsView',
    action: ACTIONS_VIEW_OPTIONS.FOLLOW_UP,
  },
];
