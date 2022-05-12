import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  Disease,
  PlaceOfStay,
  PresentCondition,
  Sex,
  CaseOrigin,
  FORM_DATA_CHECKBOX,
  FORM_DATA_WIDGET,
  AreaType,
  PointOfEntryType,
} from '../../app.constants';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsDisease = pipe.transform(Disease);
const optionsPlaceOfStay = pipe.transform(PlaceOfStay);
const optionsSex = pipe.transform(Sex);
const optionsPresentCondition = pipe.transform(PresentCondition);
const optionsCaseOrigin = pipe.transform(CaseOrigin);
const optionsAreaTypes = pipe.transform(AreaType);
const optionsPointOfEntry = pipe.transform(PointOfEntryType);

export const FORM_DATA_CASE_ADD = [
  {
    id: 'caseData',
    title: 'strings.headingCaseData',
    required: true,
    anchor: 'case_data',
    anchorLabel: 'strings.headingCaseData',
    fields: [
      {
        ...FORM_DATA_DATE,
        label: 'captions.CaseData.reportDate',
        key: 'reportDate',
        validation: ['required'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'epidNumber',
        label: 'captions.CaseData.epidNumber',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        label: 'captions.disease',
        validation: ['required'],
        options: optionsDisease,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'diseaseVariant.uuid',
        label: 'captions.CaseData.diseaseVariant',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        newLine: true,
        dependingOn: 'disease',
        dependingOnValues: ['CORONAVIRUS'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'diseaseDetails',
        label: 'captions.diseaseVariantDetails',
        newLine: true,
        dependingOn: 'disease',
        dependingOnValues: ['CORONAVIRUS'],
      },
    ],
  },
  {
    id: 'caseOrigin',
    title: 'captions.CaseData.caseOrigin',
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'caseOrigin',
        validation: ['required'],
        options: optionsCaseOrigin,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'pointOfEntryDiffer',
        label: 'captions.CaseData.differentPointOfEntryJurisdiction',
        newLine: true,
      },
    ],
  },
  {
    id: 'responsibleJurisdiction',
    title: 'strings.headingResponsibleJurisdiction',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'dontShareWithReportingTool',
        label: 'captions.CaseData.dontShareWithReportingTool',
        newLine: true,
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-add-case-label',
        dependingOn: 'dontShareWithReportingTool',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'captions.CaseData.responsibleRegion',
        service: 'regionService',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: 'captions.CaseData.responsibleDistrict',
        service: 'districtService',
        determinedBy: [
          {
            key: 'region.uuid',
          },
        ],
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        label: 'captions.CaseData.responsibleCommunity',
        service: 'communityService',
        determinedBy: [
          {
            key: 'district.uuid',
          },
        ],
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'differentPlaceOfStayJurisdiction',
        label: 'captions.CaseData.differentPlaceOfStayJurisdiction',
        newLine: true,
      },
    ],
  },
  {
    id: 'placeOfStay',
    title: 'captions.casePlaceOfStay',
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'placeOfStay',
        validation: ['required'],
        options: optionsPlaceOfStay,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'regionPlaceOfStay.uuid',
        label: 'captions.CaseData.region',
        service: 'regionService',
        validation: ['required'],
        newLine: true,
        dependingOn: 'differentPlaceOfStayJurisdiction',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'districtPlaceOfStay.uuid',
        label: 'captions.CaseData.district',
        service: 'districtService',
        determinedBy: [
          {
            key: 'regionPlaceOfStay.uuid',
            keyMap: 'region.uuid',
          },
        ],
        validation: ['required'],
        newLine: true,
        dependingOn: 'differentPlaceOfStayJurisdiction',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'communityPlaceOfStay.uuid',
        label: 'captions.CaseData.community',
        service: 'communityService',
        determinedBy: [
          {
            key: 'districtPlaceOfStay.uuid',
            keyMap: 'district.uuid',
          },
        ],
        newLine: true,
        dependingOn: 'differentPlaceOfStayJurisdiction',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityTypeGroup',
        label: 'captions.facilityTypeGroup',
        validation: ['required'],
        service: 'helperService',
        serviceMethod: 'getFacilityCategories',
        newLine: true,
        className: 'size-large',
        dependingOn: 'placeOfStay',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        label: 'captions.CaseData.facilityType',
        validation: ['required'],
        service: 'helperService',
        serviceMethod: 'getFacilityTypes',
        determinedBy: [
          {
            key: 'facilityTypeGroup',
          },
        ],
        newLine: true,
        className: 'size-large',
        dependingOn: 'placeOfStay',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facility',
        label: 'captions.CaseData.healthFacility',
        validation: ['required'],
        service: 'facilityService',
        fallbackOption: {
          fallbackOptionKey: 'OTHER_FACILITY',
          fallbackOptionValue: 'captions.Facility.OTHER_FACILITY',
        },
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
        newLine: true,
        className: 'size-large',
        dependingOn: 'placeOfStay',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthFacilityDetails',
        label: 'captions.CaseData.healthFacilityDetails',
        newLine: true,
        validation: ['required'],
        className: 'size-large',
        dependingOn: 'facility',
        dependingOnValues: ['OTHER_FACILITY'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'placeOfStatyDetails',
        label: 'captions.CaseData.noneHealthFacilityDetails',
        newLine: true,
        className: 'size-full',
        dependingOn: 'placeOfStay',
        dependingOnValues: ['HOME'],
      },
    ],
  },
  {
    id: 'pointOfEntry',
    title: 'captions.CaseData.pointOfEntry',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'regionPointOfEntry.uuid',
        label: 'captions.CaseData.pointOfEntryRegion',
        service: 'regionService',
        newLine: true,
        dependingOn: 'pointOfEntryDiffer',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'districtPointOfEntry.uuid',
        label: 'captions.CaseData.pointOfEntryDistrict',
        service: 'districtService',
        determinedBy: [
          {
            key: 'regionPointOfEntry.uuid',
            keyMap: 'region.uuid',
          },
        ],
        dependingOn: 'pointOfEntryDiffer',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'pointOfEntry',
        label: 'captions.CaseData.pointOfEntry',
        options: optionsPointOfEntry,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'pointOfEntryDetails',
        label: 'pointOfEntryDetails',
      },
    ],
  },
  {
    id: 'person',
    title: 'strings.headingPersonInformation',
    required: true,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'firstName',
        label: 'captions.firstName',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'lastName',
        label: 'captions.lastName',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'year',
        label: 'captions.Person.birthdate',
        placeholder: 'strings.year',
        options: [],
        className: 'size-small',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'month',
        label: ' ',
        placeholder: 'strings.month',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'day',
        label: ' ',
        placeholder: 'strings.day',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'sex',
        label: 'captions.sex',
        options: optionsSex,
        className: 'size-small',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthId',
        label: 'captions.Person.nationalHealthId',
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'passportNumber',
        label: 'captions.Person.passportNumber',
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'phoneNo',
        label: 'captions.User.phone',
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'email',
        label: 'captions.User.userEmail',
        className: 'size-large',
      },
    ],
  },
  {
    id: 'health',
    title: 'headingHealth',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'presentCondition',
        label: 'captions.Person.presentCondition',
        options: optionsPresentCondition,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        label: 'captions.Symptoms.onsetDate',
        key: 'symptomOnset',
      },
    ],
  },
  {
    id: 'homeAddress',
    title: 'captions.Person.address',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'caseDataEnterHomeAddressNow',
        label: 'captions.caseDataEnterHomeAddressNow',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.country.uuid',
        label: 'captions.Country',
        service: 'countryService',
        validation: ['required'],
        newLine: true,
        dependingOn: 'caseDataEnterHomeAddressNow',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.region.uuid',
        label: 'captions.CaseData.region',
        service: 'regionService',
        determinedBy: [
          {
            key: 'person.country.uuid',
            keyMap: 'country.uuid',
          },
        ],
        validation: ['required'],
        newLine: true,
        dependingOn: 'caseDataEnterHomeAddressNow',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.district.uuid',
        label: 'captions.CaseData.district',
        service: 'districtService',
        determinedBy: [
          {
            key: 'person.region.uuid',
            keyMap: 'region.uuid',
          },
        ],
        validation: ['required'],
        newLine: true,
        dependingOn: 'caseDataEnterHomeAddressNow',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.community.uuid',
        label: 'captions.CaseData.community',
        service: 'communityService',
        determinedBy: [
          {
            key: 'person.district.uuid',
            keyMap: 'district.uuid',
          },
        ],
        newLine: true,
        dependingOn: 'caseDataEnterHomeAddressNow',
      },
    ],
  },
  {
    id: 'facility',
    title: 'captions.CaseData.healthFacility',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'healthFacility2.uuid',
        label: 'captions.facilityTypeGroup',
        options: [
          {
            key: 'default',
            value: 'defaultRegion',
          },
        ],
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType2',
        label: 'captions.CaseData.facilityType',
        options: [
          {
            key: 'default',
            value: 'defaultRegion',
          },
        ],
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facility2',
        label: 'captions.CaseData.healthFacility',
        options: [
          {
            key: 'default',
            value: 'defaultRegion',
          },
        ],
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthFacilityDetails2',
        label: 'captions.CaseData.healthFacilityDetails',
        newLine: true,
        className: 'size-full',
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
        className: 'fullwidth',
        widgetInfo: {
          latitude: 'location.latitude',
          longitude: 'location.longitude',
          latLonAccuracy: 'location.latLonAccuracy',
        },
      },
    ],
  },
];
