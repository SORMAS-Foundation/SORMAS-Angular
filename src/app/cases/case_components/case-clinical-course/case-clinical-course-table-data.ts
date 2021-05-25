import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TableColumn } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: _('Date & time'),
    dataKey: 'visitDateTime',
    isSortable: true,
    dateFormat: ['dd ', 'MMM hh:mm aa'],
    align: 'right',
    className: 'visit-date',
  },
  {
    name: _('Temperature'),
    dataKey: 'symptoms.temperature',
    isSortable: true,
    numberFormat: {
      normal: [0, 37.3],
      fever: [37.3, 45],
    },
    align: 'right',
    className: 'visit-temperature',
  },
  {
    name: _('Blood pressure'),
    dataKey: 'symptoms.bloodPressureSystolic',
    isSortable: true,
    interpolate: '{value} <em>mmHg</em>',
    align: 'right',
    className: 'visit-blood-pressure',
  },
  {
    name: _('Heart rate'),
    dataKey: 'symptoms.heartRate',
    isSortable: true,
    interpolate: '{value} <em>bpm</em>',
    align: 'right',
    className: 'visit-heart-rate',
  },
  {
    name: _('Visiting person'),
    dataKey: 'visitingPerson',
    isSortable: true,
    className: 'visit-clinician',
  },
  {
    name: _('Clinical remarks'),
    dataKey: 'visitRemarks',
    isSortable: true,
    className: 'visit-remarks',
  },
];
