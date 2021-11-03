import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_SAMPLE_EDIT } from '../../_constants/actions';

export const actionsEditDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionDelete',
    action: ACTIONS_SAMPLE_EDIT.DELETE,
    className: 'warn',
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.sampleRefer',
    action: ACTIONS_SAMPLE_EDIT.REFER,
  },
];
