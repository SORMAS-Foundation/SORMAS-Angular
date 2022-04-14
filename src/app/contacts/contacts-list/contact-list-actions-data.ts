import { ACTIONS_CONTACT, ACTIONS_VIEW_OPTIONS } from '../../app.constants';
import { NavItem, NavItemRole } from '../../_models/common';

export const actionsViewOptionsDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.caseDefaultView',
    action: ACTIONS_VIEW_OPTIONS.DEFAULT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.caseDetailedView',
    action: ACTIONS_VIEW_OPTIONS.DETAILED,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.caseFollowupVisitsView',
    action: ACTIONS_VIEW_OPTIONS.FOLLOW_UP,
  },
];

export const actionsMoreDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportBasic',
    action: ACTIONS_CONTACT.BASIC_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportDetailed',
    action: ACTIONS_CONTACT.DETAILED_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportFollowUp',
    action: ACTIONS_CONTACT.FOLLOW_UP_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportCustom',
    action: ACTIONS_CONTACT.CUSTOM_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.lineListing',
    action: ACTIONS_CONTACT.LINE_LISTING,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.contactMergeDuplicates',
    action: ACTIONS_CONTACT.MERGE_DUPLICATES,
  },
];
