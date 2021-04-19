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
  className?: string;
  options: { key: string; value: string }[];
  active: boolean;
  dependingOn?: string;
  dependingOnValues?: any[];
  widget?: any;

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
      className?: string;
      options?: { key: string; value: string }[];
      active?: boolean;
      dependingOn?: string;
      dependingOnValues?: any[];
      widget?: any;
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
    this.className = options.className;
    this.options = options.options || [];
    this.active = options.active ?? true;
    this.dependingOn = options.dependingOn;
    this.dependingOnValues = options.dependingOnValues;
    this.widget = options.widget;
  }
}

export class FormBase<T> {
  title: string;
  fields: FormElementBase<T>[];
  required?: boolean;
  anchor?: string;
  anchorLabel?: string;
}
