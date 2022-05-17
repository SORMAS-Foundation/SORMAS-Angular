import { NavItem, NavItemRole } from '../../_models/common';
import { ACTIONS_CASE } from '../../app.constants';
import { ACTIONS_BULK_EDIT, ACTIONS_VIEW_OPTIONS } from '../../_constants/actions';
import { CaseEditComponent } from '../case-edit/case-edit.component';

export const actionsMoreDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportBasic',
    action: ACTIONS_CASE.BASIC_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportDetailed',
    action: ACTIONS_CASE.DETAILED_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportCaseManagement',
    action: ACTIONS_CASE.CASE_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportSamples',
    action: ACTIONS_CASE.SAMPLE_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.exportCaseCustom',
    action: ACTIONS_CASE.CUSTOM_EXPORT,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.lineListing',
    action: ACTIONS_CASE.LINE_LISTING,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.caseOpenCasesGuide',
    action: ACTIONS_CASE.CASE_GUIDE,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.caseMergeDuplicates',
    action: ACTIONS_CASE.MERGE_DUPLICATES,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.caseSearchSpecificCase',
    action: ACTIONS_CASE.CASE_SPECIFIC_SEARCH,
  },
];

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

export const actionsBulkEditDefs: NavItem[] = [
  {
    role: NavItemRole.ACTION,
    name: 'captions.edit',
    action: ACTIONS_BULK_EDIT.EDIT,
    component: CaseEditComponent,
    componentTitle: 'Edit case',
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionDelete',
    action: ACTIONS_BULK_EDIT.DELETE,
    className: 'warn',
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionArchiveCoreEntity',
    action: ACTIONS_BULK_EDIT.ARCHIVE,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.actionDearchiveCoreEntity',
    action: ACTIONS_BULK_EDIT.DEARCHIVE,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.sormasToSormasShare',
    action: ACTIONS_BULK_EDIT.SHARE,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.ExternalSurveillanceToolGateway.send',
    action: ACTIONS_BULK_EDIT.REPORTING_TOOL,
  },
  {
    role: NavItemRole.ACTION,
    name: 'captions.bulkActionCreatDocuments',
    action: ACTIONS_BULK_EDIT.QUARANTINE_DOCUMENTS,
  },
];
