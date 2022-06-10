import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_PERSONS } from '../../_constants/actions';

export const actionsExportDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportBasic',
    action: ACTIONS_PERSONS.BASIC_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportDetailed',
    action: ACTIONS_PERSONS.DETAILED_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportCustom',
    action: ACTIONS_PERSONS.CUSTOM_EXPORT,
  },
];
