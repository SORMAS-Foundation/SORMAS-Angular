import { ACTIONS_EXTERNAL_MESSAGE, COMMON_DATE_FORMAT } from '../../app.constants';
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
    name: 'captions.ExternalMessage.type',
    dataKey: 'type',
    isSortable: true,
  },
  {
    name: 'captions.ExternalMessage.messageDateTime',
    dataKey: 'messageDateTime',
    align: 'right',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.ExternalMessage.reporterName',
    dataKey: 'reporterName',
    isSortable: true,
  },
  {
    name: 'captions.ExternalMessage.reporterPostalCode',
    dataKey: 'reporterPostalCode',
    isSortable: true,
  },
  {
    name: 'captions.ExternalMessage.testedDisease',
    dataKey: 'testedDisease',
    translationName: 'Disease',
    isSortable: true,
  },
  {
    name: 'captions.ExternalMessage.sampleOverallTestResult',
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
    name: 'captions.ExternalMessage.personFirstName',
    dataKey: 'personFirstName',
    isSortable: true,
  },
  {
    name: 'captions.ExternalMessage.personLastName',
    dataKey: 'personLastName',
    isSortable: true,
  },
  {
    name: 'captions.ExternalMessage.personBirthDate',
    dataKey: 'personBirthDate',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.ExternalMessage.personPostalCode',
    dataKey: 'personPostalCode',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.ExternalMessage.assignee',
    dataKey: 'assignee.caption',
    align: 'center',
    className: 'lab-message-assignee',
    actions: [
      {
        type: ACTIONS_EXTERNAL_MESSAGE.ASSIGN,
        icon: 'assignment_ind',
        className: 'button-assign',
        color: 'primary',
        dependingOn: 'assignee',
        dependingOnValues: [null],
      },
      {
        type: ACTIONS_EXTERNAL_MESSAGE.ASSIGN,
        useValue: true,
        color: 'primary',
        buttonStyle: 'STROKED',
        className: 'button-reassign',
        dependingOn: 'assignee',
      },
    ],
  },
  {
    name: 'captions.externalMessageProcess',
    dataKey: 'status',
    translationName: 'ExternalMessageStatus',
    align: 'center',
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '<span class="lab-message-status-$param1">$param1</span>',
      params: ['status'],
    },
    actions: [
      {
        type: ACTIONS_EXTERNAL_MESSAGE.PROCESS,
        text: 'captions.externalMessageProcess',
        color: 'primary',
        buttonStyle: 'FLAT',
        dependingOn: 'status',
        dependingOnValues: ['UNPROCESSED'],
      },
    ],
  },
  {
    name: 'captions.ExternalMessage',
    dataKey: '',
    actions: [
      {
        type: ACTIONS_EXTERNAL_MESSAGE.DOWNLOAD,
        text: 'actionDownload',
        color: 'primary',
        icon: 'file_download',
      },
    ],
  },
];
