import { ACTIONS_LAB_MESSAGE, COMMON_DATE_FORMAT } from '../../app.constants';
import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'UUID',
    dataKey: 'uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      truncate: 6,
    },
  },
  {
    name: 'captions.LabMessage.messageDateTime',
    dataKey: 'messageDateTime',
    align: 'right',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.LabMessage.labName',
    dataKey: 'labName',
    isSortable: true,
  },
  {
    name: 'captions.LabMessage.labPostalCode',
    dataKey: 'labPostalCode',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.LabMessage.testedDisease',
    dataKey: 'testedDisease',
    translationName: 'Disease',
    isSortable: true,
  },
  {
    name: 'captions.LabMessage.sampleOverallTestResult',
    dataKey: 'sampleOverallTestResult',
    translationName: 'PathogenTestResultType',
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '<span class="pathogen-test-result-$param1">$param1</span>',
      params: ['sampleOverallTestResult'],
    },
    isSortable: true,
  },
  {
    name: 'captions.LabMessage.personFirstName',
    dataKey: 'personFirstName',
    isSortable: true,
  },
  {
    name: 'captions.LabMessage.personLastName',
    dataKey: 'personLastName',
    isSortable: true,
  },
  {
    name: 'captions.LabMessage.personBirthDate',
    dataKey: 'personBirthDate',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.LabMessage.personPostalCode',
    dataKey: 'personPostalCode',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.LabMessage.assignee',
    dataKey: 'assignee.caption',
    align: 'center',
    className: 'lab-message-assignee',
    actions: [
      {
        type: ACTIONS_LAB_MESSAGE.ASSIGN,
        icon: 'assignment_ind',
        className: 'button-assign',
        color: 'primary',
        dependingOn: 'assignee',
        dependingOnValues: [null],
      },
      {
        type: ACTIONS_LAB_MESSAGE.ASSIGN,
        useValue: true,
        color: 'primary',
        buttonStyle: 'STROKED',
        className: 'button-reassign',
        dependingOn: 'assignee',
      },
    ],
  },
  {
    name: 'captions.labMessageProcess',
    dataKey: 'status',
    translationName: 'LabMessageStatus',
    align: 'center',
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '<span class="lab-message-status-$param1">$param1</span>',
      params: ['status'],
    },
    actions: [
      {
        type: ACTIONS_LAB_MESSAGE.PROCESS,
        text: 'captions.labMessageProcess',
        color: 'primary',
        buttonStyle: 'FLAT',
        dependingOn: 'status',
        dependingOnValues: ['UNPROCESSED'],
      },
    ],
  },
  {
    name: 'captions.LabMessage',
    dataKey: '',
    actions: [
      {
        type: ACTIONS_LAB_MESSAGE.DOWNLOAD,
        text: 'actionDownload',
        color: 'primary',
        icon: 'file_download',
      },
    ],
  },
];
