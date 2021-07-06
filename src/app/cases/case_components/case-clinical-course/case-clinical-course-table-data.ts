import { TableColumn, TableDataFormatOptions } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'ClinicalVisit.visitDateTime',
    dataKey: 'visitDateTime',
    isSortable: true,
    className: 'visit-date',
    align: 'right',
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'dd MMM hh:mm aa',
      breakSpaces: true,
    },
  },
  {
    name: 'ClinicalVisit.temperature',
    dataKey: 'temperature',
    isSortable: true,
    align: 'right',
    className: 'visit-temperature',
    format: {
      type: TableDataFormatOptions.NUMBER,
      match: {
        normal: [0, 37.3],
        fever: [37.3, 45],
      },
      breakSpaces: true,
    },
  },
  {
    name: 'ClinicalVisit.bloodPressure',
    dataKey: 'bloodPressure',
    isSortable: true,
    align: 'right',
    className: 'visit-blood-pressure',
    format: {
      type: TableDataFormatOptions.DISPLAY,
      breakSpaces: true,
    },
  },
  {
    name: 'ClinicalVisit.heartRate',
    dataKey: 'heartRate',
    isSortable: true,
    align: 'right',
    className: 'visit-heart-rate',
    format: {
      type: TableDataFormatOptions.DISPLAY,
      breakSpaces: true,
    },
  },
  {
    name: 'ClinicalVisit.visitRemarks',
    dataKey: 'visitRemarks',
    isSortable: true,
    className: 'visit-remarks',
  },
  {
    name: 'ClinicalVisit.visitingPerson',
    dataKey: 'visitingPerson',
    isSortable: true,
    className: 'visit-clinician',
  },
];
