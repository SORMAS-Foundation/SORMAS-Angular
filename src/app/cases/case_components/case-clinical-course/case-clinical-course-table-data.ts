import { TableColumn, TableDataFormatOptions } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.ClinicalVisit.visitDateTime',
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
    name: 'captions.ClinicalVisit.temperature',
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
    name: 'captions.ClinicalVisit.bloodPressure',
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
    name: 'captions.ClinicalVisit.heartRate',
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
    name: 'captions.ClinicalVisit.visitRemarks',
    dataKey: 'visitRemarks',
    isSortable: true,
    className: 'visit-remarks',
  },
  {
    name: 'captions.ClinicalVisit.visitingPerson',
    dataKey: 'visitingPerson',
    isSortable: true,
    className: 'visit-clinician',
  },
];
