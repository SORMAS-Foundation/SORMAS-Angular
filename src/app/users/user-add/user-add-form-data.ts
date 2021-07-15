import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import {
  FORM_DATA_CHECKBOX,
  FORM_DATA_INPUT,
  FORM_DATA_SELECT,
  FORM_DATA_WIDGET,
} from '../../_constants/form-data';
import { Language } from '../../_models/models';
import { AreaType, PointOfEntryType, UserRole } from '../../_constants/enums';

const pipe = new EnumToKeyValuePipe();

const optionsLanguages = pipe.transform(Language);
const optionsCountries = pipe.transform(['default country']);
const optionsRegions = pipe.transform(['default region']);
const optionsDistricts = pipe.transform(['default district']);
const optionsCommunities = pipe.transform(['default community']);
const optionsFacilityCategories = pipe.transform(['default category']);
const optionsFacilityTypes = pipe.transform(['default type']);
const optionsFacilities = pipe.transform(['default facility']);
const optionsAreaTypes = pipe.transform(AreaType);
const optionsLimitedDisease = pipe.transform(['default disease']);
const optionsUserRoles = pipe.transform(UserRole);
const optionsAssociatedOfficer = pipe.transform(['default officer']);
const optionsPointOfEntries = pipe.transform(PointOfEntryType);
const optionsLaboratories = pipe.transform(['default laboratory']);

export const FORM_DATA_USER_ADD = [
  {
    id: 'personData',
    title: 'headingPersonData',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'firstName',
        label: 'firstName',
        validation: ['required'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'lastName',
        label: 'lastName',
        validation: ['required'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'userEmail',
        label: 'User.userEmail',
        newLine: true,
        hint: 'infoUserEmail',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'phone',
        label: 'User.phone',
        hint: 'infoUserPhoneNumber',
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
    title: 'headingLocation',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'address.country.caption',
        label: 'country',
        options: optionsCountries,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.caption',
        label: 'region',
        options: optionsRegions,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.caption',
        label: 'district',
        options: optionsDistricts,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.caption',
        label: 'community',
        options: optionsCommunities,
      },
    ],
  },
  {
    id: 'facility',
    title: 'facility',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'address.facilityDetails',
        label: 'facilityTypeGroup',
        options: optionsFacilityCategories,
        className: 'size-large',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'address.facilityType',
        label: 'facilityType',
        options: optionsFacilityTypes,
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'address.facility',
        label: 'facility',
        options: optionsFacilities,
        newLine: true,
        className: 'size-large',
      },
    ],
  },
  {
    id: 'address',
    title: 'User.address',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'location.street',
        label: 'Facility.street',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.city',
        label: 'Facility.city',
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-address-button',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.houseNumber',
        label: 'Facility.houseNumber',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'location.areaType',
        label: 'Facility.areaType',
        options: optionsAreaTypes,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.postalCode',
        label: 'Facility.postalCode',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.additionalInformation',
        label: 'Facility.additionalInformation',
      },
    ],
  },
  {
    id: 'gps',
    title: 'User.gps',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'location.latitude',
        label: 'Location.latitude',
        className: 'size-small',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.longitude',
        label: 'Location.longitude',
        className: 'size-small',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'location.latLonAccuracy',
        label: 'Location.latLonAccuracy',
        className: 'size-small',
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-gps-coords',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'location.details',
        label: 'Location.details',
      },
    ],
  },
  {
    id: 'userData',
    title: 'headingUserData',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'userName',
        label: 'User.userName',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'limitedDisease',
        label: 'User.limitedDisease',
        options: optionsLimitedDisease,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'userRoles',
        label: 'User.userRoles',
        options: optionsUserRoles,
        newLine: true,
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region',
        label: 'region',
        options: optionsRegions,
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
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district',
        label: 'district',
        options: optionsDistricts,
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
        key: 'community',
        label: 'community',
        options: optionsCommunities,
        validation: ['required'],
        dependingOn: 'userRoles',
        dependingOnValues: ['COMMUNITY_OFFICER', 'COMMUNITY_INFORMANT'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facility',
        label: 'facility',
        options: optionsFacilities,
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
        label: 'User.associatedOfficer',
        options: optionsAssociatedOfficer,
        newLine: true,
        dependingOn: 'userRoles',
        dependingOnValues: ['COMMUNITY_INFORMANT', 'HOSPITAL_INFORMANT'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'pointOfEntry',
        label: 'User.pointOfEntry',
        validation: ['required'],
        options: optionsPointOfEntries,
        dependingOn: 'userRoles',
        dependingOnValues: ['POE_INFORMANT'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'laboratory',
        label: 'User.laboratory',
        validation: ['required'],
        newLine: true,
        options: optionsLaboratories,
        dependingOn: 'userRoles',
        dependingOnValues: ['LAB_USER', 'EXTERNAL_LAB_USER'],
      },
    ],
  },
];
