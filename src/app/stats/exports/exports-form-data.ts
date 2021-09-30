import { FORM_DATA_CHECKBOX, FORM_DATA_WIDGET } from '../../app.constants';

export const FORM_DATA_DATABASE_EXPORTS = [
  {
    id: 'database',
    title: 'exportDatabase',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-exports-group-select',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'dataSormas',
    title: 'captions.exportSormasData',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'cases',
        label: 'enum.DatabaseTable.CASES',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'hospitalizations',
        label: 'enum.DatabaseTable.HOSPITALIZATIONS',
        className: 'fullwidth tab-1',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'previous_hospitalizations',
        label: 'enum.DatabaseTable.PREVIOUSHOSPITALIZATIONS',
        className: 'fullwidth tab-2',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'case_symptoms',
        label: 'enum.DatabaseTable.CASE_SYMPTOMS',
        className: 'fullwidth tab-1',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'epidemiological_data',
        label: 'enum.DatabaseTable.EPIDATA',
        className: 'fullwidth tab-1',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'exposures',
        label: 'enum.DatabaseTable.EXPOSURES',
        className: 'fullwidth tab-2',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'therapies',
        label: 'enum.DatabaseTable.THERAPIES',
        className: 'fullwidth tab-1',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'prescriptions',
        label: 'enum.DatabaseTable.PRESCRIPTIONS',
        className: 'fullwidth tab-2',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'treatments',
        label: 'enum.DatabaseTable.TREATMENTS',
        className: 'fullwidth tab-2',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'clinical_courses',
        label: 'enum.DatabaseTable.CLINICAL_COURSES',
        className: 'fullwidth tab-1',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'health_conditions',
        label: 'enum.DatabaseTable.HEALTH_CONDITIONS',
        className: 'fullwidth tab-2',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'clinical_visits',
        label: 'enum.DatabaseTable.CLINICAL_VISITS',
        className: 'fullwidth tab-2',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'clinical_visit_symptoms',
        label: 'enum.DatabaseTable.CLINICAL_VISIT_SYMPTOMS',
        className: 'fullwidth tab-3',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'contacts',
        label: 'enum.DatabaseTable.CONTACTS',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'visits',
        label: 'enum.DatabaseTable.VISITS',
        className: 'fullwidth tab-1',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'visit_symptoms',
        label: 'enum.DatabaseTable.VISIT_SYMPTOMS',
        className: 'fullwidth tab-2',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'events',
        label: 'enum.DatabaseTable.EVENTS',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'eventgroups',
        label: 'enum.DatabaseTable.EVENTGROUPS',
        className: 'fullwidth tab-1',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'event_persons_involved',
        label: 'enum.DatabaseTable.EVENTPARTICIPANTS',
        className: 'fullwidth tab-1',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'actions',
        label: 'enum.DatabaseTable.ACTIONS',
        className: 'fullwidth tab-1',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'samples',
        label: 'enum.DatabaseTable.SAMPLES',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'sample_tests',
        label: 'enum.DatabaseTable.SAMPLETESTS',
        className: 'fullwidth tab-1',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'tasks',
        label: 'enum.DatabaseTable.TASKS',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'persons',
        label: 'enum.DatabaseTable.PERSONS',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'person_contact_details',
        label: 'enum.DatabaseTable.PERSON_CONTACT_DETAILS',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'locations',
        label: 'enum.DatabaseTable.LOCATIONS',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'outbreaks',
        label: 'enum.DatabaseTable.OUTBREAKS',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'dataInfrastructure',
    title: 'captions.exportInfrastructureData',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'countries',
        label: 'enum.DatabaseTable.COUNTRIES',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'regions',
        label: 'enum.DatabaseTable.REGIONS',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'districts',
        label: 'enum.DatabaseTable.DISTRICTS',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'communities',
        label: 'enum.DatabaseTable.COMMUNITIES',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'facilities',
        label: 'enum.DatabaseTable.FACILITIES',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'dataConfiguration',
    title: 'captions.exportConfigurationData',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'customizable_enum_values',
        label: 'enum.DatabaseTable.CUSTOMIZABLE_ENUM_VALUES',
        className: 'fullwidth',
      },
    ],
  },
];
