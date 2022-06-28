import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_BULK_EDIT, ACTIONS_SAMPLE } from '../../_constants/actions';

export const actionsMoreDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportBasic',
    action: ACTIONS_SAMPLE.BASIC_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportDetailed',
    action: ACTIONS_SAMPLE.DETAILED_EXPORT,
  },
];

export const actionsBulkEditDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionDelete',
    action: ACTIONS_BULK_EDIT.DELETE,
    className: 'warn',
  },
];
