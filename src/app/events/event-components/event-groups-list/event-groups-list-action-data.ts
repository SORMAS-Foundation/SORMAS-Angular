import { ACTIONS_EVENTS_VIEW_OPTIONS, ACTIONS_EVENT_GROUP } from '../../../_constants/actions';
import { NavItem, NavItemRole } from '../../../_models/common';

export const viewOptionsDefs: NavItem[] = [
  {
    role: NavItemRole.LINK,
    name: 'captions.eventDefaultView',
    action: ACTIONS_EVENTS_VIEW_OPTIONS.EVENTS,
  },
  {
    role: NavItemRole.LINK,
    name: 'captions.eventActionsView',
    action: ACTIONS_EVENTS_VIEW_OPTIONS.ACTIONS,
  },
  {
    role: NavItemRole.LINK,
    name: 'captions.eventGroupsView',
    action: ACTIONS_EVENTS_VIEW_OPTIONS.GROUPS,
  },
];

export const actionsMoreDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportBasic',
    action: ACTIONS_EVENT_GROUP.BASIC_EXPORT,
  },
];
