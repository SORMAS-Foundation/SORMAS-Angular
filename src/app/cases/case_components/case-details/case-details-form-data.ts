import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import {
  FORM_DATA_CHECKBOX,
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_TEXTAREA,
  FORM_DATA_NULL,
  FORM_DATA_NUMBER,
  FORM_DATA_WIDGET,
  CaseClassification,
  InvestigationStatus,
  CaseOutcome,
  Disease,
  YesNoUnknown,
  PlaceOfStay,
  Quarantine,
  VaccinationStatus,
  VaccinationSource,
  VaccineName,
  VaccineManufacturer,
  CaseIdentificationSource,
  ScreeningType,
  InfectionSetting,
  Trimester,
} from '../../../app.constants';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsCaseClassification = pipe.transform(CaseClassification);
const optionsCaseOutcome = pipe.transform(CaseOutcome);
const optionsInvestigationStatus = pipe.transform(InvestigationStatus);
const optionsDisese = pipe.transform(Disease);
const optionsYesNoUnknown = pipe.transform(YesNoUnknown);
const optionsPlaceOfStay = pipe.transform(PlaceOfStay);
const optionsQuarantine = pipe.transform(Quarantine);
const optionsVaccinationStatus = pipe.transform(VaccinationStatus);
const optionsVaccinationSource = pipe.transform(VaccinationSource);
const optionsVaccineName = pipe.transform(VaccineName);
const optionsVaccineManufacturer = pipe.transform(VaccineManufacturer);
const optionsCaseIdentificationSource = pipe.transform(CaseIdentificationSource);
const optionsScreeningType = pipe.transform(ScreeningType);
const optionsInfectionSetting = pipe.transform(InfectionSetting);
const optionsTrimester = pipe.transform(Trimester);

export const FORM_DATA_CASE_DETAILS = [
  {
    title: _('Date of report'),
    required: true,
    anchor: 'case_data',
    anchorLabel: _('Case data'),
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'reportDate',
        validation: ['required'],
      },
    ],
  },
  {
    title: _('Case classification'),
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'caseClassification',
        validation: ['required'],
        options: optionsCaseClassification,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'clinicalConfirmation',
        label: _('Clinical confirmation'),
        options: optionsYesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'epidemiologicalConfirmation',
        label: _('Epidemiological confirmation'),
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'laboratoryDiagnosticConfirmation',
        label: _('Lab diagnostic confirmation'),
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_DATE,
        key: 'classificationDate',
        label: _('Date of classification'),
        newLine: true,
        className: 'size-medium',
      },
      {
        ...FORM_DATA_NULL,
        key: 'classificationUser.caption',
        label: _('Classifying user'),
      },
    ],
  },
  {
    title: _('Investigation status'),
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'investigationStatus',
        validation: ['required'],
        options: optionsInvestigationStatus,
      },
      {
        ...FORM_DATA_DATE,
        key: 'investigatedDate',
        label: _('Date of investigation'),
        newLine: true,
        dependingOn: 'investigationStatus',
        dependingOnValues: ['DISCARDED', 'DONE'],
      },
    ],
  },
  {
    title: _('External data'),
    required: true,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'externalID',
        label: _('External ID'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalToken',
        label: _('External token'),
      },
    ],
  },
  {
    title: _('Disease'),
    required: true,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        label: _('Disease'),
        validation: ['required'],
        options: optionsDisese,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'diseaseVariant.uuid',
        label: _('Disease variant'),
        options: optionsDisese,
      },
    ],
  },
  {
    title: _('Epid number'),
    required: false,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'epidNumber',
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-new-epid-number',
      },
    ],
  },
  {
    title: _('Outcome of case'),
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'outcome',
        validation: ['required'],
        options: optionsCaseOutcome,
      },
      {
        ...FORM_DATA_DATE,
        key: 'outcomeDate',
        hint: _('Date of outcome'),
        newLine: true,
        dependingOn: 'outcome',
        dependingOnValues: ['DECEASED', 'RECOVERED'],
      },
      {
        ...FORM_DATA_RADIO,
        key: 'sequelae',
        label: _('Sequelae'),
        options: optionsYesNoUnknown,
        dependingOn: 'outcome',
        dependingOnValues: ['RECOVERED', 'UNKNOWN'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sequelaeDetails',
        label: _('Describe sequelae'),
        newLine: true,
        className: 'size-full',
        dependingOn: 'sequelae',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    title: _('Source'),
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'reportingDistrict.uuid',
        label: _('Reporting district'),
        options: [
          {
            key: 'default',
            value: _('Default district'),
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'caseIdentificationSource',
        label: _('Case identification source'),
        options: optionsCaseIdentificationSource,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'screeningType',
        label: _('Screening'),
        options: optionsScreeningType,
        dependingOn: 'caseIdentificationSource',
        dependingOnValues: ['SCREENING'],
      },
    ],
  },
  {
    title: _('Case origin'),
    required: false,
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'caseOrigin',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: _('Responsible region'),
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: _('Default region'),
          },
        ],
        newLine: true,
        className: 'size-large',
        dependingOn: 'caseOrigin',
        dependingOnValues: ['IN_COUNTRY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: _('Responsible district'),
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: _('Default district'),
          },
        ],
        newLine: true,
        className: 'size-large',
        dependingOn: 'caseOrigin',
        dependingOnValues: ['IN_COUNTRY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        label: _('Responsible community'),
        options: [
          {
            key: 'default',
            value: _('Default community'),
          },
        ],
        newLine: true,
        className: 'size-large',
        dependingOn: 'caseOrigin',
        dependingOnValues: ['IN_COUNTRY'],
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: _('Point of entry'),
        dependingOn: 'caseOrigin',
        dependingOnValues: ['POINT_OF_ENTRY'],
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntryDetails',
        label: ' ',
        dependingOn: 'caseOrigin',
        dependingOnValues: ['POINT_OF_ENTRY'],
      },
    ],
  },
  {
    title: _('Place of stay'),
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'placeOfStaty',
        validation: ['required'],
        options: optionsPlaceOfStay,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'healthFacility.uuid',
        label: _('Facility category region'),
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: _('Default region'),
          },
        ],
        newLine: true,
        className: 'size-large',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        label: _('Facility type'),
        validation: ['required'],
        options: [
          {
            key: 'LABORATORY',
            value: _('Laboratory'),
          },
        ],
        newLine: true,
        className: 'size-large',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthFacilityDetails',
        label: _('Facility name and description'),
        newLine: true,
        className: 'size-full',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'placeOfStatyDetails',
        label: _('Place description'),
        newLine: true,
        className: 'size-full',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['HOME'],
      },
    ],
  },
  {
    title: _('Quarantine'),
    required: false,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'quarantineHomePossible',
        label: _('Home base quarantine possible'),
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineHomePossibleComment',
        label: _('Comment'),
        className: 'size-large',
        dependingOn: 'quarantineHomePossible',
        dependingOnValues: ['NO'],
      },
      {
        ...FORM_DATA_RADIO,
        key: 'quarantineHomeSupplyEnsured',
        label: _('Supply ensured?'),
        options: optionsYesNoUnknown,
        dependingOn: 'quarantineHomePossible',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineHomeSupplyEnsuredComment',
        label: _('Comment'),
        className: 'size-large',
        dependingOn: 'quarantineHomeSupplyEnsured',
        dependingOnValues: ['NO'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'quarantine',
        label: _('Place of quarantine'),
        options: optionsQuarantine,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineFrom',
        label: _('Quarantine period'),
        hint: _('Start date'),
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineTo',
        label: ' ',
        hint: _('End data'),
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'quarantineOrderedVerbally',
        label: _('Quarantine ordered verbally'),
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineOrderedVerballyDate',
        hint: _('Date of verbal order'),
        dependingOn: 'quarantineOrderedVerbally',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'quarantineOrderedOfficialDocument',
        label: _('Quarantine ordered by official document'),
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineOrderedOfficialDocumentDate',
        hint: _('Date of document order'),
        dependingOn: 'quarantineOrderedOfficialDocument',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'quarantineOfficialOrderSent',
        label: _('Official quarantine order sent'),
        dependingOn: 'quarantineOrderedOfficialDocument',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineOfficialOrderSentDate',
        hint: _('Date order was sent'),
        dependingOn: 'quarantineOfficialOrderSent',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineHelpNeeded',
        label: _('Help needed in quarantine'),
        newLine: true,
        className: 'size-full',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineTypeDetails',
        label: _('Quarantine details'),
        newLine: true,
        className: 'size-full',
        dependingOn: 'quarantine',
        dependingOnValues: ['OTHER'],
      },
    ],
  },
  {
    title: _('Report GPS'),
    required: false,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'reportLat',
        label: _('Report GPS latitude'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'reportLon',
        label: _('Report GPS longitude'),
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'reportLatLonAccuracy',
        label: _('Report GPS accuracy in m'),
        newLine: true,
      },
    ],
  },
  {
    title: _('Donation'),
    required: false,
    anchor: 'additional_information',
    anchorLabel: _('Additional information'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'bloodOrganOrTissueDonated',
        label: _('Blood/organ/tissue donation in the last 6 month'),
        options: optionsYesNoUnknown,
      },
    ],
  },
  {
    title: _('Infection'),
    required: false,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'nosocomialOutbreak',
        label: _('Resulted from nosocomial outbreak'),
      },
      {
        ...FORM_DATA_SELECT,
        key: 'infectionSetting',
        label: _('Infection setting'),
        options: optionsInfectionSetting,
        dependingOn: 'nosocomialOutbreak',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'reInfection',
        label: _('Reinfection'),
        options: optionsYesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'previousInfectionDate',
        label: ' ',
        hint: _('Previous infection date'),
        dependingOn: 'reInfection',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    title: _('Additional medical information'),
    required: false,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'pregnant',
        label: _('Pregnancy'),
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'postpartum',
        label: _('Postpartum'),
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'trimester',
        label: _('Trimester'),
        options: optionsTrimester,
        newLine: true,
        dependingOn: 'pregnant',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    title: _('Vaccination'),
    required: false,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'vaccination',
        label: _('Vaccination status'),
        options: optionsVaccinationStatus,
      },
      {
        ...FORM_DATA_NUMBER,
        key: 'vaccinationDoses',
        label: _('Vaccination doses'),
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'firstVaccinationDate',
        hint: _('First vaccination'),
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'lastVaccinationDate',
        hint: _('Last vaccination'),
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccinationInfoSource',
        label: _('Source of vaccination'),
        options: optionsVaccinationSource,
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccineName',
        label: _('Vaccine name'),
        options: optionsVaccineName,
        newLine: true,
        className: 'size-large',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccineManufacturer',
        label: _('Manufacturer'),
        options: optionsVaccineManufacturer,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineInn',
        label: _('INN'),
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineBatchNumber',
        label: _('Batch number'),
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineUniiCode',
        label: _('UNII code'),
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineAtcCode',
        label: _('ATC code'),
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
    ],
  },
  {
    title: _('Work'),
    required: false,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'prohibitionToWork',
        label: _('Prohibition to work'),
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_DATE,
        key: 'prohibitionToWorkFrom',
        label: ' ',
        hint: _('Prohibition to work from'),
        dependingOn: 'prohibitionToWork',
        dependingOnValues: ['YES'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'prohibitionToWorkUntil',
        label: ' ',
        hint: _('Prohibition to work until'),
        dependingOn: 'prohibitionToWork',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    title: _('Surveillance'),
    required: false,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'surveillanceOfficer',
        label: _('Responsible surveillance officer'),
        options: [
          {
            key: 'default',
            value: 'Default',
          },
        ],
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'clinicianName',
        label: _('Name of responsable clinician'),
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'clinicianPhone',
        label: _('Phone of responsable clinician'),
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'clinicianEmail',
        label: _('Email address of responsable clinician'),
        newLine: true,
        className: 'size-large',
      },
    ],
  },
  {
    title: '',
    required: false,
    anchor: 'followup_status',
    anchorLabel: _('Follow-up status'),
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-follow-up-status',
        className: 'size-large push-right',
      },
      {
        ...FORM_DATA_NULL,
        key: 'followUpStatus',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'overwriteFollowUpUntil',
        label: _('Overwrite follow-up until date'),
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'followUpUntil',
        dependingOn: _('overwriteFollowUpUntil'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'followUpComment',
        label: _('Follow up status comment'),
        newLine: true,
        className: 'size-full',
      },
    ],
  },
  {
    title: '',
    required: false,
    anchor: 'paper_form',
    anchorLabel: _('Paper form'),
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'districtLevelDate',
        label: _('Date received at district level'),
        className: 'size-medium',
      },
      {
        ...FORM_DATA_DATE,
        key: 'regionLevelDate',
        label: _('Date received at regional level'),
        newLine: true,
        className: 'size-medium',
      },
      {
        ...FORM_DATA_DATE,
        key: 'nationalLevelDate',
        label: _('Date received at national level'),
        newLine: true,
        className: 'size-medium',
      },
    ],
  },
  {
    title: '',
    required: false,
    anchor: 'general_comment',
    anchorLabel: _('General comment'),
    fields: [
      {
        ...FORM_DATA_TEXTAREA,
        key: 'additionalDetails',
        label: _('Your comment here'),
      },
    ],
  },
];
