import { ACTIONS_VIEW_OPTION } from '../../../_constants/actions';
import { NavItem, NavItemRole } from '../../../_models/common';

export const viewOptionsDefs: NavItem[] = [
  {
    role: NavItemRole.LINK,
    name: 'captions.eventDefaultView',
    action: ACTIONS_VIEW_OPTION.EVENTS,
  },
  {
    role: NavItemRole.LINK,
    name: 'captions.eventActionsView',
    action: ACTIONS_VIEW_OPTION.ACTIONS,
  },
  {
    role: NavItemRole.LINK,
    name: 'captions.eventGroupsView',
    action: ACTIONS_VIEW_OPTION.GROUPS,
  },
];
