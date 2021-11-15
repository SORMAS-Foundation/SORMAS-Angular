import { NavItem, NavItemRole } from '../_models/common';
import { ACTIONS_DASHBOARD_VIEW_OPTIONS } from '../_constants/actions';

export const actionsViewOptionsDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'enum.DashboardType.SURVEILLANCE',
    action: ACTIONS_DASHBOARD_VIEW_OPTIONS.SURVEILLANCE,
  },
  {
    role: NavItemRole.ACTION,
    name: 'enum.DashboardType.CONTACTS',
    action: ACTIONS_DASHBOARD_VIEW_OPTIONS.CONTACTS,
  },
];
