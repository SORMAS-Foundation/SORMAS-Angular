import { NavItem, NavItemRole } from '../../../_models/common';
import { ACTIONS_BULK_EDIT } from '../../../_constants/actions';

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
