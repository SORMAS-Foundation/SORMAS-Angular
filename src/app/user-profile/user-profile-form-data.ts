import { FORM_DATA_INPUT, FORM_DATA_SELECT, localeOptions } from '../app.constants';

const optionsLocale = localeOptions.map((locale) => ({
  key: locale.locale,
  value: locale.language,
  icon: locale.flag,
}));

export const FORM_DATA_USER_PROFILE = [
  {
    id: 'personalInfo',
    title: 'personalInformation',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'language',
        options: optionsLocale,
        allowClear: false,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'email',
      },
    ],
  },
];
