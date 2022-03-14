import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_BULK_EDIT, ACTIONS_SAMPLES_VIEW_OPTIONS } from '../../_constants/actions';

export const actionsViewOptionsDefs: NavItem[] = [
  {
    role: NavItemRole.LINK,
    name: 'enum.SamplesViewType.SAMPLES',
    action: ACTIONS_SAMPLES_VIEW_OPTIONS.SAMPLES,
  },
  {
    role: NavItemRole.LINK,
    name: 'enum.SamplesViewType.LAB_MESSAGES',
    action: ACTIONS_SAMPLES_VIEW_OPTIONS.LAB_MESSAGES,
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
