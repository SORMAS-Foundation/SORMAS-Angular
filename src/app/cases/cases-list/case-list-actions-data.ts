import { NavItem } from '../../_models/common';

export const actionsMoreDefs: NavItem[] = [
  {
    role: 'MENU',
    name: 'export',
    action: '',
    children: [
      {
        role: 'ACTION',
        name: 'exportBasic',
        action: 'BASIC_EXPORT',
      },
      {
        role: 'ACTION',
        name: 'exportDetailed',
        action: 'DETAILED_EXPORT',
      },
      {
        role: 'ACTION',
        name: 'exportCaseManagement',
        action: 'CASE_EXPORT',
      },
      {
        role: 'ACTION',
        name: 'exportSamples',
        action: 'SAMPLE_EXPORT',
      },
      {
        role: 'ACTION',
        name: 'exportCaseCustom',
        action: 'CUSTOM_EXPORT',
      },
    ],
  },
  {
    role: 'ACTION',
    name: 'caseLineListing',
    action: 'LINE_LISTING',
    className: 'accent',
  },
  {
    role: 'ACTION',
    name: 'caseOpenCasesGuide',
    action: 'CASE_GUIDE',
    className: 'accent',
  },
  {
    role: 'ACTION',
    name: 'caseMergeDuplicates',
    action: 'MERGE_DUPLICATES',
    className: 'accent',
  },
];
