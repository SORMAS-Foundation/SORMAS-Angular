import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import { FORM_DATA_RADIO, FORM_DATA_WIDGET, YesNoUnknown } from '../../../app.constants';

const pipe = new EnumToKeyValuePipe();
const optionsYesNoUnknown = pipe.transform(YesNoUnknown);

export const FORM_DATA_CASE_EPID_DETAILS = [
  {
    id: 'exposureInvestigation',
    title: _('headingExposureInvestigation'),
    subTitle: _('infoExposureInvestigation'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.exposureDetailsKnown',
        label: _('EpiData.exposureDetailsKnown'),
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-exposures-list',
        label: _('EpiData.exposures'),
        newLine: true,
      },
    ],
  },
  {
    id: 'activity',
    title: _('EpiData.activitiesAsCase'),
    subTitle: _('infoActivityAsCaseInvestigation'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.activityAsCaseDetailsKnown',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-activities-list',
        newLine: true,
      },
    ],
  },
  {
    id: 'incubation',
    title: _('EpiData.incubationPeriod'),
    subTitle: _('infoEpiDataFieldsHint'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.highTransmissionRiskArea',
        label: _('EpiData.highTransmissionRiskArea'),
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.largeOutbreaksArea',
        label: _('EpiData.largeOutbreaksArea'),
        options: optionsYesNoUnknown,
      },
    ],
  },
  {
    id: 'contacts',
    title: _('EpiData.contactWithSourceCase'),
    subTitle: _('infoEpiDataSourceCaseContacts'),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.contactWithSourceCaseKnown',
        label: _('EpiData.contactWithSourceCaseKnown'),
        options: optionsYesNoUnknown,
      },
    ],
  },
];
