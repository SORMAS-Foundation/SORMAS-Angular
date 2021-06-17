// eslint-disable-next-line max-classes-per-file
export class FormElementBase<T> {
  value?: T;
  key: string;
  label: string;
  placeholder?: string;
  hint?: string;
  validation?: string[];
  validationMessage?: string;
  order: number;
  controlType: string;
  type: string;
  newLine: boolean | undefined;
  disabledField: boolean | undefined;
  className?: string;
  options: { key: string; value: string }[];
  active: boolean;
  dependingOn?: string;
  dependingOnValues?: any[];
  widget?: any;
  preselected?: string;

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
      disabledField?: boolean;
      className?: string;
      options?: { key: string; value: string }[];
      active?: boolean;
      dependingOn?: string;
      dependingOnValues?: any[];
      widget?: any;
      preselected?: string;
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
    this.disabledField = options.disabledField;
    this.className = options.className;
    this.options = options.options || [];
    this.active = options.active ?? true;
    this.dependingOn = options.dependingOn;
    this.dependingOnValues = options.dependingOnValues;
    this.widget = options.widget;
    this.preselected = options.preselected;
  }
}

export class FormBase<T> {
  title: string;
  subTitle?: string;
  fields: FormElementBase<T>[];
  required?: boolean;
  anchor?: string;
  anchorLabel?: string;
}
