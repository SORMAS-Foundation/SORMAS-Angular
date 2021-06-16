import { NavItem } from '../../_models/common';
import { ACTIONS_CASE } from '../../app.constants';

export const actionsMoreDefs: NavItem[] = [
  {
    role: 'MENU',
    name: 'export',
    action: '',
    children: [
      {
        role: 'ACTION',
        name: 'exportBasic',
        action: ACTIONS_CASE.BASIC_EXPORT,
      },
      {
        role: 'ACTION',
        name: 'exportDetailed',
        action: ACTIONS_CASE.DETAILED_EXPORT,
      },
      {
        role: 'ACTION',
        name: 'exportCaseManagement',
        action: ACTIONS_CASE.CASE_EXPORT,
      },
      {
        role: 'ACTION',
        name: 'exportSamples',
        action: ACTIONS_CASE.SAMPLE_EXPORT,
      },
      {
        role: 'ACTION',
        name: 'exportCaseCustom',
        action: ACTIONS_CASE.CUSTOM_EXPORT,
      },
    ],
  },
  {
    role: 'ACTION',
    name: 'caseLineListing',
    action: ACTIONS_CASE.LINE_LISTING,
    className: 'accent',
  },
  {
    role: 'ACTION',
    name: 'caseOpenCasesGuide',
    action: ACTIONS_CASE.CASE_GUIDE,
    className: 'accent',
  },
  {
    role: 'ACTION',
    name: 'caseMergeDuplicates',
    action: ACTIONS_CASE.MERGE_DUPLICATES,
    className: 'accent',
  },
];
