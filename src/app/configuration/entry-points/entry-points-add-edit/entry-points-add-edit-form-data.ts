import {
  FORM_DATA_CHECKBOX,
  FORM_DATA_INPUT,
  FORM_DATA_SELECT,
  PointOfEntryType,
} from '../../../app.constants';
import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const entryPointTypeOptions = pipe.transform(PointOfEntryType);

export const FORM_DATA_ENTRY_POINTS_ADD_EDIT = [
  {
    id: '',
    title: 'EntryPoint.short',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'name',
        label: 'captions.name',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'pointOfEntryType',
        label: 'captions.PointOfEntry.pointOfEntryType',
        options: entryPointTypeOptions,
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'active',
        label: 'strings.active',
        newLine: true,
      },
    ],
  },
  {
    id: 'location',
    title: 'captions.Location',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        required: true,
        label: 'captions.region',
        service: 'regionService',
        validation: ['required'],
        className: 'size-medium',
        newLine: false,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        required: true,
        label: 'captions.district',
        service: 'districtService',
        determinedBy: [
          {
            key: 'region.uuid',
          },
        ],
        validation: ['required'],
        className: 'size-medium',
        newLine: false,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'latitude',
        label: 'EntryPoint.latitude',
        newLine: true,
        className: 'size-small',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'longitude',
        label: 'EntryPoint.longitude',
        className: 'size-small',
      },
    ],
  },
  {
    id: '',
    title: 'EntryPoint.external',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'externalID',
        label: 'captions.PointOfEntry.externalID',
      },
    ],
  },
];
