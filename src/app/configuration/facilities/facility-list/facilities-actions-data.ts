import { NavItem, NavItemRole } from '../../../_models/common';
import { ACTIONS_BULK_EDIT, ACTIONS_FACILITY } from '../../../_constants/actions';

export const actionsBulkEditDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionArchiveCoreEntity',
    action: ACTIONS_BULK_EDIT.ARCHIVE,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionDearchiveCoreEntity',
    action: ACTIONS_BULK_EDIT.DEARCHIVE,
  },
];

export const actionsMoreDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportBasic',
    action: ACTIONS_FACILITY.BASIC_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportDetailed',
    action: ACTIONS_FACILITY.DETAILED_EXPORT,
  },
];
