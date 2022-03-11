import { COMMON_DATE_FORMAT } from '../../app.constants';
import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnContactsDefs: TableColumn[] = [
  {
    name: 'captions.Contact.uuid',
    dataKey: 'uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      truncate: 6,
    },
  },
  {
    name: 'captions.CaseData.reportDate',
    dataKey: 'reportDateTime',
    align: 'right',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.Contact.disease',
    dataKey: 'disease',
    translationName: 'Disease',
    isSortable: true,
  },
  {
    name: 'captions.Contact.contactStatus',
    dataKey: 'contactStatus',
    translationName: 'ContactStatus',
    isSortable: true,
  },
  {
    name: 'captions.Contact.contactClassification',
    dataKey: 'contactClassification',
    translationName: 'ContactClassification',
    isSortable: true,
    iconify: 'IconsMap',
  },
  {
    name: 'captions.Contact.contactCategory',
    dataKey: 'contactCategory',
    translationName: 'ContactCategory',
    isSortable: true,
  },
  {
    name: 'captions.SormasToSormasPerson.personName',
    dataKey: 'person.firstName',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1 $param2',
      params: ['person.firstName', 'person.lastName'],
    },
  },
  {
    name: 'captions.SormasToSormasPerson.birthdDate',
    dataKey: 'person.birthdateDD',
    align: 'right',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1/$param2/$param3',
      params: ['person.birthdateMM', 'person.birthdateDD', 'person.birthdateYYYY'],
    },
  },
  {
    name: 'captions.SormasToSormasPerson.sex',
    dataKey: 'person.sex',
    translationName: 'Sex',
    isSortable: true,
  },
  {
    name: 'captions.SormasToSormasPerson.address',
    dataKey: 'person.address.city',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1, $param2, $param3, $param4',
      params: [
        'person.address.city.city',
        'person.address.city.street',
        'person.address.city.region',
        'person.address.city.district',
      ],
    },
  },
  {
    name: 'captions.Contact.region',
    dataKey: 'region.caption',
    isSortable: true,
  },
  {
    name: 'captions.Contact.district',
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: 'captions.Contact.community',
    dataKey: 'community.caption',
    isSortable: true,
  },
  {
    name: 'captions.Contact.lastContactDate',
    dataKey: 'onsetDate',
    align: 'right',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
];
