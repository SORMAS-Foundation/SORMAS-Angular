import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_BULK_EDIT } from '../../_constants/actions';

export const actionsBulkEditDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionEnable',
    action: ACTIONS_BULK_EDIT.ENABLE,
    className: 'enable',
    icon: 'check_circle_black',
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionDisable',
    action: ACTIONS_BULK_EDIT.DISABLE,
    className: 'disable',
    icon: 'not_interested',
  },
];
