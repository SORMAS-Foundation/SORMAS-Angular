export const FORM_DATA_BASE = {
  key: '',
  label: '',
  placeholder: '',
  value: '',
  validation: [],
  order: 1,
  controlType: 'input',
  options: [],
  type: '',
  newLine: false,
  active: true,
};

export const FORM_DATA_INPUT = {
  ...FORM_DATA_BASE,
  className: 'size-medium',
};

export const FORM_DATA_DATE = {
  ...FORM_DATA_BASE,
  controlType: 'date',
  type: 'date',
  className: 'size-medium',
};

export const FORM_DATA_DATETIME = {
  ...FORM_DATA_BASE,
  controlType: 'datetime',
  type: 'date',
  className: 'size-large',
};

export const FORM_DATA_NUMBER = {
  ...FORM_DATA_BASE,
  type: 'number',
  className: 'size-medium',
};

export const FORM_DATA_RADIO = {
  ...FORM_DATA_BASE,
  controlType: 'radio',
};

export const FORM_DATA_SELECT = {
  ...FORM_DATA_BASE,
  controlType: 'dropdown',
  type: 'simple',
  className: 'size-medium',
};

export const FORM_DATA_CHECKBOX = {
  ...FORM_DATA_BASE,
  controlType: 'checkbox',
};

export const FORM_DATA_TEXTAREA = {
  ...FORM_DATA_BASE,
  controlType: 'textarea',
  className: 'size-full',
};

export const FORM_DATA_NULL = {
  ...FORM_DATA_BASE,
  controlType: 'null',
  className: 'size-medium',
  disabled: true,
};

export const FORM_DATA_WIDGET = {
  ...FORM_DATA_BASE,
  controlType: 'widget',
};
