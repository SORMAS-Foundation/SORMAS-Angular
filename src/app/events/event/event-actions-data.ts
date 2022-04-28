import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_EVENT_EDIT, ACTIONS_EVENT_PARTICIPANT } from '../../_constants/actions';

export const actionsEditDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionArchiveCoreEntity',
    action: ACTIONS_EVENT_EDIT.ARCHIVE,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionDelete',
    action: ACTIONS_EVENT_EDIT.DELETE,
    className: 'warn',
  },
];

export const actionsMoreDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportBasic',
    action: ACTIONS_EVENT_PARTICIPANT.BASIC_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportDetailed',
    action: ACTIONS_EVENT_PARTICIPANT.DETAILED_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportCustom',
    action: ACTIONS_EVENT_PARTICIPANT.CUSTOM_EXPORT,
  },
];
