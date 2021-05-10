import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import { FORM_DATA_RADIO, FORM_DATA_WIDGET, YesNoUnknown } from '../../../app.constants';

const pipe = new EnumToKeyValuePipe();
const optionsYesNoUnknown = pipe.transform(YesNoUnknown);

export const FORM_DATA_CASE_EPID_DETAILS = [
  {
    title: _('Exposure investigation'),
    subTitle: _(
      'Please document ALL relevant direct exposures (eg attended gatherings, travels, animal contacts, etc) during the incubation period'
    ),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.exposureDetailsKnown',
        label: _('Exposure details known'),
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-exposures-list',
        label: _('Exposures'),
        newLine: true,
      },
    ],
  },
  {
    title: _('Activity as case'),
    subTitle: _('Please document ALL relevant activities after infection'),
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
    title: _('Incubation period'),
    subTitle: _(
      'Please indicate if any of the following is relevant for the patient during the incubation period'
    ),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.highTransmissionRiskArea',
        label: _(
          'Residing or working in an area with high risk of transmission of the disease eg colsed residential and camp-like settings'
        ),
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.largeOutbreaksArea',
        label: _(
          'Residing or traveling to countries/territories/areas experiencing larger outbreaks of local transmission'
        ),
        options: optionsYesNoUnknown,
      },
    ],
  },
  {
    title: _('Contacts with source case'),
    subTitle: _(
      'Please indicate ALL contacts with potential source cases during the incubation period'
    ),
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.contactWithSourceCaseKnown',
        label: _('Contactsh with source case known'),
        options: optionsYesNoUnknown,
      },
    ],
  },
];
