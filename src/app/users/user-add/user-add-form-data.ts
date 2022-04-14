import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import {
  FORM_DATA_CHECKBOX,
  FORM_DATA_INPUT,
  FORM_DATA_SELECT,
  FORM_DATA_WIDGET,
} from '../../_constants/form-data';
import { AreaType, PointOfEntryType, UserRole, Language } from '../../_constants/enums';

const pipe = new EnumToKeyValuePipe();

const optionsLanguages = pipe.transform(Language);
const optionsAreaTypes = pipe.transform(AreaType);
const optionsLimitedDisease = pipe.transform(['default disease']);
const optionsUserRoles = pipe.transform(UserRole);
const optionsAssociatedOfficer = pipe.transform(['default officer']);
const optionsPointOfEntries = pipe.transform(PointOfEntryType);
const optionsLaboratories = pipe.transform(['default laboratory']);

export const FORM_DATA_USER_ADD = [
  {
    id: 'personData',
    title: 'strings.headingPersonData',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'firstName',
        label: 'captions.firstName',
        validation: ['required'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'lastName',
        label: 'captions.lastName',
        validation: ['required'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'userEmail',
        label: 'captions.User.userEmail',
        newLine: true,
        hint: 'strings.infoUserEmail',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'phone',
        label: 'captions.User.phone',
        hint: 'strings.infoUserPhoneNumber',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'language',
        label: 'User.language',
        options: optionsLanguages,
        newLine: true,
      },
    ],
  },
  {
    id: 'location',
    title: 'strings.headingLocation',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'address.country.uuid',
        label: 'captions.Country',
        service: 'countryService',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'address.region.uuid',
        label: 'captions.regionName',
        service: 'regionService',
        determinedBy: [
          {
            key: 'address.country.uuid',
            keyMap: 'country.uuid',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'address.district.uuid',
        label: 'captions.districtName',
        service: 'districtService',
        determinedBy: [
          {
            key: 'address.region.uuid',
            keyMap: 'region.uuid',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'address.community.uuid',
        label: 'captions.communityName',
        service: 'communityService',
        determinedBy: [
          {
            key: 'address.district.uuid',
            keyMap: 'district.uuid',
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
        service: 'helperService',
        serviceMethod: 'getFacilityCategories',
        className: 'size-large',
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
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'address.Facility',
        label: 'captions.Facility',
        service: 'facilityService',
        fallbackOptionKey: 'OTHER_FACILITY',
        fallbackOptionValue: 'captions.Facility.OTHER_FACILITY',
        determinedBy: [
          {
            key: 'address.district.uuid',
            keyMap: 'district.uuid',
          },
          {
            key: 'address.community.uuid',
            keyMap: 'community.uuid',
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
        newLine: true,
        className: 'size-large',
      },
    ],
  },
  {
    id: 'address',
    title: 'captions.User.address',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-address-button',
        className: 'push-right',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.street',
        label: 'captions.Facility.street',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.city',
        label: 'captions.Facility.city',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.houseNumber',
        label: 'captions.Facility.houseNumber',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'location.areaType',
        label: 'captions.Facility.areaType',
        options: optionsAreaTypes,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.postalCode',
        label: 'captions.Facility.postalCode',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.additionalInformation',
        label: 'captions.Facility.additionalInformation',
      },
    ],
  },
  {
    id: 'gps',
    title: 'headingGps',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-gps-coords',
        className: 'push-right',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.latitude',
        label: 'captions.Location.latitude',
        className: 'size-small',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.longitude',
        label: 'captions.Location.longitude',
        className: 'size-small',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.latLonAccuracy',
        label: 'captions.Location.latLonAccuracy',
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
        key: 'location.details',
        label: 'captions.Location.details',
      },
    ],
  },
  {
    id: 'userData',
    title: 'strings.headingUserData',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'active',
        label: 'captions.User.active',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'userName',
        label: 'captions.User.userName',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'limitedDisease',
        label: 'captions.User.limitedDisease',
        options: optionsLimitedDisease,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'userRoles',
        label: 'captions.User.userRoles',
        options: optionsUserRoles,
        newLine: true,
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'captions.region',
        service: 'regionService',
        newLine: true,
        validation: ['required'],
        dependingOn: 'userRoles',
        dependingOnValues: [
          'SURVEILLANCE_SUPERVISOR',
          'ADMIN_SUPERVISOR',
          'SURVEILLANCE_OFFICER',
          'HOSPITAL_INFORMANT',
          'COMMUNITY_OFFICER',
          'COMMUNITY_INFORMANT',
          'CASE_OFFICER',
          'CONTACT_SUPERVISOR',
          'CONTACT_OFFICER',
          'EVENT_OFFICER',
          'DISTRICT_OBSERVER',
          'POE_INFORMANT',
          'POE_SUPERVISOR',
          'CLINICIAN',
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
        validation: ['required'],
        dependingOn: 'userRoles',
        dependingOnValues: [
          'SURVEILLANCE_OFFICER',
          'HOSPITAL_INFORMANT',
          'COMMUNITY_OFFICER',
          'COMMUNITY_INFORMANT',
          'CASE_OFFICER',
          'CONTACT_OFFICER',
          'DISTRICT_OBSERVER',
          'POE_INFORMANT',
        ],
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
        validation: ['required'],
        dependingOn: 'userRoles',
        dependingOnValues: ['COMMUNITY_OFFICER', 'COMMUNITY_INFORMANT'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facility',
        label: 'captions.facility',
        options: [],
        newLine: true,
        dependingOn: 'userRoles',
        dependingOnValues: [
          'SURVEILLANCE_OFFICER',
          'HOSPITAL_INFORMANT',
          'COMMUNITY_OFFICER',
          'COMMUNITY_INFORMANT',
          'CASE_OFFICER',
          'CONTACT_OFFICER',
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'associatedOfficer',
        label: 'captions.User.associatedOfficer',
        options: optionsAssociatedOfficer,
        newLine: true,
        dependingOn: 'userRoles',
        dependingOnValues: ['COMMUNITY_INFORMANT', 'HOSPITAL_INFORMANT'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'pointOfEntry',
        label: 'captions.User.pointOfEntry',
        validation: ['required'],
        options: optionsPointOfEntries,
        dependingOn: 'userRoles',
        dependingOnValues: ['POE_INFORMANT'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'laboratory',
        label: 'captions.User.laboratory',
        validation: ['required'],
        newLine: true,
        options: optionsLaboratories,
        dependingOn: 'userRoles',
        dependingOnValues: ['LAB_USER', 'EXTERNAL_LAB_USER'],
      },
    ],
  },
];
