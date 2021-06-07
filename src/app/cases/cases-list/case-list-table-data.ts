import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: _('CaseData.uuid'),
    dataKey: 'uuid',
    isSortable: true,
    linkPattern: '/cases/case/$param1/details',
    linkParams: ['uuid'],
  },
  {
    name: _('CaseData.externalID'),
    dataKey: 'externalID',
    isSortable: true,
  },
  {
    name: _('disease'),
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: _('CaseData.diseaseVariant'),
    dataKey: 'diseaseDetails',
    isSortable: true,
  },
  {
    name: _('Contact.caze.caseClassification'),
    dataKey: 'caseClassification',
    isSortable: true,
  },
  {
    name: _('CaseData.outcome'),
    dataKey: 'outcome',
    isSortable: true,
  },
  {
    name: _('CaseData.investigationStatus'),
    dataKey: 'investigationStatus',
    isSortable: true,
    iconify: true,
  },
  {
    name: _('CaseData.personFirstName'),
    dataKey: 'person.firstName',
    isSortable: true,
  },
  {
    name: _('CaseData.personLastName'),
    dataKey: 'person.lastName',
    isSortable: true,
  },
  {
    name: _('CaseData.district'),
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: _('CaseData.healthFacilityName'),
    dataKey: 'healthFacility.caption',
    isSortable: true,
  },
  {
    name: _('CaseData.pointOfEntry'),
    dataKey: 'pointOfEntry.caption',
    isSortable: true,
  },
  {
    name: _('CaseData.reportDate'),
    dataKey: 'reportDate',
    isSortable: true,
  },
  {
    name: _('CaseData.quarantineTo'),
    dataKey: 'quarantineTo',
    isSortable: true,
  },
  {
    name: _('CaseData.followUpStatus'),
    dataKey: 'followUpStatus',
    isSortable: true,
  },
  {
    name: _('CaseData.followUpUntil'),
    dataKey: 'followUpUntil',
    isSortable: true,
  },
];
