// eslint-disable-next-line max-classes-per-file
export class FormElementBase<T> {
  value?: T; // the value of the field
  key: string; // the key of the field
  label: string; // the label of the field
  placeholder?: string; // the placeholder of the field
  hint?: string; // the hint message when hovering over the field
  validation?: string[]; // the type of validation of the field. ex. : required, email, etc.
  validationMessage?: string; // the validation message
  order: number;
  controlType: string;
  type: string; // the type of the field : input, date, checkbox, etc.
  newLine: boolean | undefined; // true if the field needs to be on a new line
  separated: boolean | undefined;
  className?: string;
  options: { key: any; value: string }[]; // the options of the field, if it is a dropdown or radio buttons
  active: boolean;
  dependingOn?: string; // the key of the field that the current field is depending on in order to be visible
  dependingOnValues?: any[]; // the value of the field that the current field is depending on in order to be visible
  widget?: any;
  chips?: boolean; // flag to toggle chips for multi-select
  allowClear?: boolean; // toggles the `clear` field button
  allowSelect?: boolean; // permists selection of all possible options with one click (multiselect, checkbox group)
  radioNewLine?: boolean; // radio btns displayed with full width
  disabled?: boolean; // input disabling
  timeLabel?: string;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      placeholder?: string;
      hint?: string;
      validation?: string[];
      validationMessage?: string;
      order?: number;
      controlType?: string;
      type?: string;
      newLine?: boolean;
      separated?: boolean;
      className?: string;
      options?: { key: any; value: string }[];
      active?: boolean;
      dependingOn?: string;
      dependingOnValues?: any[];
      widget?: any;
      chips?: boolean;
      allowClear?: boolean;
      allowSelect?: boolean;
      radioNewLine?: boolean;
      disabled?: boolean;
      timeLabel?: string;
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.placeholder = options.placeholder || '';
    this.hint = options.hint;
    this.validation = options.validation;
    this.validationMessage = options.validationMessage;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.newLine = options.newLine;
    this.separated = options.separated;
    this.className = options.className;
    this.options = options.options || [];
    this.active = options.active ?? true;
    this.dependingOn = options.dependingOn;
    this.dependingOnValues = options.dependingOnValues;
    this.widget = options.widget;
    this.chips = options.chips ?? false;
    this.allowClear = options.allowClear ?? false;
    this.allowSelect = options.allowSelect ?? false;
    this.radioNewLine = options.radioNewLine ?? false;
    this.disabled = options.disabled ?? false;
    this.timeLabel = options.timeLabel;
  }
}

export class FormBase<T> {
  id?: string;
  title: string;
  subTitle?: string;
  fields: FormElementBase<T>[];
  required?: boolean;
  anchor?: string;
  anchorLabel?: string;
  hidden?: boolean;
  hiddenLeftSection?: boolean;
}
