import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_BULK_EDIT } from '../../_constants/actions';

export const actionsBulkEditDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionDelete',
    action: ACTIONS_BULK_EDIT.DELETE,
    className: 'warn',
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionArchiveCoreEntity',
    action: ACTIONS_BULK_EDIT.ARCHIVE,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionGroupEvent',
    action: ACTIONS_BULK_EDIT.GROUP,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.ExternalSurveillanceToolGateway.send',
    action: ACTIONS_BULK_EDIT.REPORTING_TOOL,
  },
];
