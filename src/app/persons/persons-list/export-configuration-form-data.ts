import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import {
  FORM_DATA_INPUT,
  FORM_DATA_CHECKBOX,
  FORM_DATA_WIDGET,
  FORM_DATA_NULL,
} from '../../app.constants';

export const FORM_DATA_EXPORT_CONFIGURATION: FormBase<any>[] = [
  {
    id: 'export',
    title: 'captions.export',
    required: true,
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'exportType',
        className: 'hidden',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'name',
        label: 'captions.ExportConfiguration.NAME',
        validation: ['required'],
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'sharedToPublic',
        label: 'captions.ExportConfiguration.sharedToPublic',
        newLine: true,
      },
    ],
  },
  {
    id: 'groupSelect',
    title: 'Customize export',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-group-select',
        widgetInfo: {
          info: 'strings.infoEditExportConfiguration',
          sections: ['coreData', 'sensitiveData', 'personData', 'additionalData', 'locationData'],
        },
        className: 'widget-fullwidth',
      },
    ],
  },
  {
    id: 'coreData',
    title: 'enum.ExportGroupType.CORE',
    className: 'columns-lg-3 columns-md-2',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-group-select',
        widgetInfo: {
          sections: ['coreData'],
        },
        className: 'widget-fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'uuid',
        label: 'captions.Person.uuid',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'firstName',
        label: 'captions.firstName',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'lastName',
        label: 'captions.lastName',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'salutation',
        label: 'captions.Person.salutation',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'otherSalutation',
        label: 'captions.Person.otherSalutation',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'sex',
        label: 'captions.Person.sex',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'birthDate',
        label: 'captions.Person.birthDate',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'approximateAge',
        label: 'captions.Person.approximateAge',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'aproximateAgeGroup',
        label: 'aproximateAgeGroup',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'phone',
        label: 'captions.Person.phone',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'phoneOwner',
        label: 'captions.Person.phoneOwner',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'emailAddress',
        label: 'captions.Person.emailAddress',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'otherContactDetails',
        label: 'captions.Person.otherContactDetails',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'externalId',
        label: 'captions.Person.externalId',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'externalToken',
        label: 'captions.Person.externalToken',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'internalToken',
        label: 'captions.Person.internalToken',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'personData',
    title: 'enum.ExportGroupType.PERSON',
    className: 'columns-lg-3 columns-md-2',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-group-select',
        widgetInfo: {
          sections: ['personData'],
        },
        className: 'widget-fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'presentCondition',
        label: 'captions.Person.presentCondition',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'deathDate',
        label: 'captions.Person.deathDate',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'occupationType',
        label: 'captions.Person.occupationType',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'birthCountry',
        label: 'captions.Person.birthCountry',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'citizenship',
        label: 'captions.Person.citizenship',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'additionalData',
    title: 'enum.ExportGroupType.ADDITIONAL',
    className: 'columns-lg-3 columns-md-2',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-group-select',
        widgetInfo: {
          sections: ['additionalData'],
        },
        className: 'widget-fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'birthName',
        label: 'captions.Person.birthName',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'namesOfGuardians',
        label: 'captions.Person.namesOfGuardians',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'causeOfDeath',
        label: 'captions.Person.causeOfDeath',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'causeOfDeathDetails',
        label: 'captions.Person.causeOfDeathDetails',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'causeOfDeathDisease',
        label: 'captions.Person.causeOfDeathDisease',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'armedForcesRelationType',
        label: 'captions.Person.armedForcesRelationType',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'symptomJournalStatus',
        label: 'captions.Person.symptomJournalStatus',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'additionalDetails',
        label: 'captions.Person.additionalDetails',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'locationData',
    title: 'enum.ExportGroupType.LOCATION',
    className: 'columns-lg-3 columns-md-2',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-group-select',
        widgetInfo: {
          sections: ['locationData'],
        },
        className: 'widget-fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'region',
        label: 'captions.Location.region',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'district',
        label: 'captions.Location.district',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'community',
        label: 'captions.Location.community',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'street',
        label: 'captions.Location.street',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'houseNumber',
        label: 'captions.Location.houseNumber',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'postalCode',
        label: 'captions.Location.postalCode',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'city',
        label: 'captions.city',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'additionalInformation',
        label: 'captions.Location.additionalInformation',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'facility',
        label: 'captions.Location.facility',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'facilityDetails',
        label: 'captions.Location.facilityDetails',
        className: 'fullwidth',
      },
    ],
  },
];
