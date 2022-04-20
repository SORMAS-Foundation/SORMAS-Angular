import { NavItem, NavItemRole } from '../../_models/common';
import {
  ACTIONS_BULK_EDIT,
  ACTIONS_SAMPLE,
  ACTIONS_SAMPLES_VIEW_OPTIONS,
} from '../../_constants/actions';

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
