import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_CASE } from '../../app.constants';
import { ACTIONS_CASE_BULK_EDIT, ACTIONS_CASE_VIEW_OPTIONS } from '../../_constants/actions';

export const actionsMoreDefs: NavItem[] = [
  {
    role: NavItemRole.MENU,
    name: 'export',
    action: '',
    children: [
      {
        role: NavItemRole.ACTION,
        name: 'exportBasic',
        action: ACTIONS_CASE.BASIC_EXPORT,
      },
      {
        role: NavItemRole.ACTION,
        name: 'exportDetailed',
        action: ACTIONS_CASE.DETAILED_EXPORT,
      },
      {
        role: NavItemRole.ACTION,
        name: 'exportCaseManagement',
        action: ACTIONS_CASE.CASE_EXPORT,
      },
      {
        role: NavItemRole.ACTION,
        name: 'exportSamples',
        action: ACTIONS_CASE.SAMPLE_EXPORT,
      },
      {
        role: NavItemRole.ACTION,
        name: 'exportCaseCustom',
        action: ACTIONS_CASE.CUSTOM_EXPORT,
      },
    ],
  },
  {
    role: NavItemRole.ACTION,
    name: 'caseLineListing',
    action: ACTIONS_CASE.LINE_LISTING,
    className: 'accent',
  },
  {
    role: NavItemRole.ACTION,
    name: 'caseOpenCasesGuide',
    action: ACTIONS_CASE.CASE_GUIDE,
    className: 'accent',
  },
  {
    role: NavItemRole.ACTION,
    name: 'caseMergeDuplicates',
    action: ACTIONS_CASE.MERGE_DUPLICATES,
    className: 'accent',
  },
];

export const actionsViewOptionsDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'Default',
    action: ACTIONS_CASE_VIEW_OPTIONS.DEFAULT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'Detailed',
    action: ACTIONS_CASE_VIEW_OPTIONS.DETAILED,
  },
  {
    role: NavItemRole.ACTION,
    name: 'Follow-up',
    action: ACTIONS_CASE_VIEW_OPTIONS.FOLLOW_UP,
  },
];

export const actionsBulkEditDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'Edit',
    action: ACTIONS_CASE_BULK_EDIT.EDIT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'Delete',
    action: ACTIONS_CASE_BULK_EDIT.DELETE,
    className: 'warn',
  },
  {
    role: NavItemRole.ACTION,
    name: 'Archive',
    action: ACTIONS_CASE_BULK_EDIT.ARCHIVE,
  },
  {
    role: NavItemRole.ACTION,
    name: 'Share',
    action: ACTIONS_CASE_BULK_EDIT.SHARE,
  },
  {
    role: NavItemRole.ACTION,
    name: 'Send to reporting tool',
    action: ACTIONS_CASE_BULK_EDIT.REPORTING_TOOL,
  },
  {
    role: NavItemRole.ACTION,
    name: 'Create quarantine order documents',
    action: ACTIONS_CASE_BULK_EDIT.QUARANTINE_DOCUMENTS,
  },
];
