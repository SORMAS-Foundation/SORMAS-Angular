import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import { FORM_DATA_INPUT, FORM_DATA_SELECT } from '../../_constants/form-data';
import { PersonAddressType, AreaType } from '../../_constants/enums';

const pipe = new EnumToKeyValuePipe();

const optionsPersonAddressType = pipe.transform(PersonAddressType);
const optionsAreaType = pipe.transform(AreaType);

export const FORM_DATA_ADDRESS_ADD_EDIT = [
  {
    id: 'addressType',
    title: 'captions.Location',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'addressType',
        label: 'captions.Location.addressType',
        options: optionsPersonAddressType,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'addressTypeDetails',
        label: 'captions.Location.addressTypeDetails',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'country.uuid',
        label: 'captions.country',
        service: 'countryService',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'captions.region',
        service: 'regionService',
        determinedBy: [
          {
            key: 'country.uuid',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: 'captions.district',
        service: 'districtService',
        determinedBy: [
          {
            key: 'region.uuid',
          },
        ],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        label: 'captions.community',
        service: 'communityService',
        determinedBy: [
          {
            key: 'district.uuid',
          },
        ],
      },
    ],
  },
  {
    id: 'facility',
    title: 'captions.Facility',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'facilityTypeGroup',
        label: 'captions.Facility.typeGroup',
        className: 'size-large',
        service: 'helperService',
        serviceMethod: 'getFacilityCategories',
        determinedBy: [
          {
            key: 'district.uuid',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        label: 'captions.Facility.type',
        service: 'helperService',
        serviceMethod: 'getFacilityTypes',
        determinedBy: [
          {
            key: 'facilityTypeGroup',
          },
        ],
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'healthFacility.uuid',
        label: 'captions.Facility',
        service: 'facilityService',
        determinedBy: [
          {
            key: 'district.uuid',
          },
          {
            key: 'community.uuid',
            optional: true,
          },
          {
            key: 'facilityTypeGroup',
            keyMap: 'typeGroup',
          },
          {
            key: 'facilityType',
            keyMap: 'type',
          },
        ],
        className: 'size-large',
        newLine: true,
      },
    ],
  },
  {
    id: 'addressDetails',
    title: 'headingAddressDetails',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'street',
        label: 'captions.Location.street',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'city',
        label: 'captions.city',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'houseNumber',
        label: 'captions.Location.houseNumber',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'areaType',
        label: 'captions.Location.areaType',
        options: optionsAreaType,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'postalCode',
        label: 'captions.Location.postalCode',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'additionalInformation',
        label: 'captions.Location.additionalInformation',
      },
    ],
  },
  {
    id: 'gps',
    title: 'headingGps',
    fields: [
      {
        ...FORM_DATA_INPUT,
        label: 'captions.Location.latitude',
        key: 'latitude',
        className: 'size-small',
      },
      {
        ...FORM_DATA_INPUT,
        label: 'captions.Location.longitude',
        key: 'longitude',
        className: 'size-small',
      },
      {
        ...FORM_DATA_INPUT,
        label: 'captions.Location.latLonAccuracy',
        key: 'latLonAccuracy',
        className: 'size-small',
      },
    ],
  },
  {
    id: 'contact',
    title: 'captions.Contact',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'details',
        label: 'captions.Location.details',
      },
    ],
  },
];
