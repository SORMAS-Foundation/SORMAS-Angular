import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TableColumn } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: _('Date & time'),
    dataKey: 'visitDateTime',
    isSortable: true,
    className: 'visit-date',
    align: 'right',
    format: {
      type: 'DATE',
      pattern: 'dd MM hh:mm aa',
    },
  },
  {
    name: _('Temperature'),
    dataKey: 'symptoms.temperature',
    isSortable: true,
    align: 'right',
    className: 'visit-temperature',
    format: {
      type: 'NUMBER',
      pattern: '<span class="$match">$param1 °C</span> <span class="explicative">$param2</span>',
      params: ['symptoms.temperature', 'symptoms.temperatureSource'],
      match: {
        normal: [0, 37.3],
        fever: [37.3, 45],
      },
    },
  },
  {
    name: _('Blood pressure'),
    dataKey: 'symptoms.bloodPressureSystolic',
    isSortable: true,
    align: 'right',
    className: 'visit-blood-pressure',
    format: {
      type: 'DISPLAY',
      pattern: '$param1/$param2 <span class="explicative">mmHg</span>',
      params: ['symptoms.bloodPressureSystolic', 'symptoms.bloodPressureDiastolic'],
    },
  },
  {
    name: _('Heart rate'),
    dataKey: 'symptoms.heartRate',
    isSortable: true,
    align: 'right',
    className: 'visit-heart-rate',
    format: {
      type: 'DISPLAY',
      pattern: '$param1 <span class="explicative">mmHg</span>',
      params: ['symptoms.heartRate'],
    },
  },
  {
    name: _('Clinician remarks'),
    dataKey: 'visitRemarks',
    isSortable: true,
    className: 'visit-remarks',
  },
  {
    name: _('Attending clinician'),
    dataKey: 'visitingPerson',
    isSortable: true,
    className: 'visit-clinician',
  },
];
