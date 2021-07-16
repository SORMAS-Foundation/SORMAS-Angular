import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import {
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
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
        key: 'address.country.caption',
        label: 'captions.country',
        options: optionsCountries,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.caption',
        label: 'captions.region',
        options: optionsRegions,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.caption',
        label: 'captions.district',
        options: optionsDistricts,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.caption',
        label: 'captions.community',
        options: optionsCommunities,
      },
    ],
  },
  {
    id: 'facility',
    title: 'captions.facility',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'address.facilityDetails',
        label: 'captions.facilityTypeGroup',
        options: optionsFacilityCategories,
        className: 'size-large',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'address.facilityType',
        label: 'captions.facilityType',
        options: optionsFacilityTypes,
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'address.facility',
        label: 'captions.facility',
        options: optionsFacilities,
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
        ...FORM_DATA_WIDGET,
        widget: 'app-address-button',
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
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-gps-coords',
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
        ...FORM_DATA_INPUT,
        key: 'userName',
        label: 'captions.User.userName',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'limitedDisease',
        label: 'captions.User.limitedDisease',
        options: optionsLimitedDisease,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'userRoles',
        label: 'captions.User.userRoles',
        options: optionsUserRoles,
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.caption',
        label: 'captions.region',
        options: optionsRegions,
        newLine: true,
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.caption',
        label: 'captions.district',
        options: optionsDistricts,
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.caption',
        label: 'captions.community',
        options: optionsCommunities,
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'address.facility',
        label: 'captions.facility',
        options: optionsFacilities,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'associatedOfficer',
        label: 'captions.User.associatedOfficer',
        options: optionsAssociatedOfficer,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'pointOfEntry',
        label: 'captions.User.pointOfEntry',
        validation: ['required'],
        options: optionsPointOfEntries,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'laboratory',
        label: 'captions.User.laboratory',
        validation: ['required'],
        newLine: true,
        options: optionsLaboratories,
      },
    ],
  },
];
