import { FORM_DATA_INPUT, FORM_DATA_SELECT } from '../../../_constants/form-data';

export const FORM_DATA_FACILITY_ADD_EDIT = [
  {
    id: 'facility',
    title: 'captions.facility',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'name',
        label: 'captions.Facility.name',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityCategory',
        label: 'captions.Facility.typeGroup',
        validation: ['required'],
        newLine: true,
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'type',
        label: 'captions.Facility.type',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
    ],
  },
  {
    id: 'location',
    title: 'strings.headingLocation',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'captions.Facility.region',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: 'captions.Facility.district',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        label: 'captions.Facility.community',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'street',
        newLine: true,
        label: 'captions.Facility.street',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'houseNumber',
        label: 'captions.Facility.houseNumber',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'postalCode',
        label: 'captions.Facility.postalCode',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'city',
        label: 'captions.Facility.city',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'areaType',
        label: 'captions.Facility.areaType',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'additionalInformation',
        label: 'captions.Facility.additionalInformation',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'latitude',
        label: 'captions.Facility.latitude',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'longitude',
        label: 'captions.Facility.longitude',
      },
    ],
  },
  {
    id: 'contact',
    title: 'strings.entityContact',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'contactPersonFirstName',
        label: 'captions.Facility.contactPersonFirstName',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'contactPersonLastName',
        label: 'captions.Facility.contactPersonLastName',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'contactPersonPhone',
        label: 'captions.Facility.contactPersonPhone',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'contactPersonEmail',
        label: 'captions.Facility.contactPersonEmail',
      },
    ],
  },
  {
    id: 'externalID',
    title: 'captions.Facility.externalID',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'externalID',
        label: 'captions.Facility.externalID',
        newLine: true,
      },
    ],
  },
];
