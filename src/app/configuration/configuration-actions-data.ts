import { NavItem, NavItemRole } from '../_models/common';
import { ACTIONS_CONFIGURATION } from '../app.constants';

export const actionsMoreDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportBasic',
    action: ACTIONS_CONFIGURATION.BASIC_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportDetailed',
    action: ACTIONS_CONFIGURATION.DETAILED_EXPORT,
  },
];

export const actionsMoreSingleDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportBasic',
    action: ACTIONS_CONFIGURATION.BASIC_EXPORT,
  },
];
