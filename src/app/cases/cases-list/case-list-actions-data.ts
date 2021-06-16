import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_CASE } from '../../app.constants';

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
