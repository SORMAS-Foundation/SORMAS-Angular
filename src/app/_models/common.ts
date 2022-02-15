import { Resource } from './resource';

// pagination
export interface PaginationResponse {
  elements: Resource[];
  hasNext: boolean;
  pageNumber: number;
  size: number;
  totalNoElements: number;
}

// sorting
export interface Sorting {
  field: string;
  ascending: boolean;
}

// filter
export interface Filter {
  field: string;
  value?: any;
  operation?: string;
}

// table
export type TableDataFormatType = 'DISPLAY' | 'LINK' | 'NUMBER' | 'DATE' | 'LOADING';

export const TableDataFormatOptions = {
  DISPLAY: 'DISPLAY' as TableDataFormatType,
  LINK: 'LINK' as TableDataFormatType,
  NUMBER: 'NUMBER' as TableDataFormatType,
  DATE: 'DATE' as TableDataFormatType,
  LOADING: 'LOADING' as TableDataFormatType,
};

export interface TableDataFormat {
  type: TableDataFormatType;
  pattern?: string;
  params?: string[];
  match?: { [key: string]: number[] };
  truncate?: number;
  breakSpaces?: boolean;
}

export interface TableColumn {
  name: string;
  additionalName?: string;
  dataKey: string;
  isSortable?: boolean;
  iconify?: boolean;
  align?: string;
  className?: string;
  format?: TableDataFormat;
  essential?: boolean;
  translationName?: string;
}

// scrolling
export interface Offset {
  top: number;
  left: number;
}

// nav menu
export type NavItemType = 'LINK' | 'ACTION' | 'MENU';

export const NavItemRole = {
  LINK: 'LINK' as NavItemType,
  ACTION: 'ACTION' as NavItemType,
  MENU: 'MENU' as NavItemType,
};

export interface NavItem {
  role: NavItemType;
  name: string;
  action: string;
  className?: string;
  children?: NavItem[];
  component?: any;
  componentTitle?: string;
}

export type InfoBarType =
  | 'CASE'
  | 'EVENT'
  | 'EVENT_PARTICIPANT'
  | 'SAMPLE_CASE'
  | 'SAMPLE_EVENT_PARTICIPANT'
  | 'SAMPLE_CONTACT'
  | 'SAMPLE_PATHOGEN'
  | 'SAMPLE_ADDITIONAL'
  | 'IMMUNIZATION'
  | 'ENTRY'
  | 'CONTACT';

export const InfoBarTypeOptions = {
  CASE: 'CASE' as InfoBarType,
  EVENT: 'EVENT' as InfoBarType,
  EVENT_PARTICIPANT: 'EVENT_PARTICIPANT' as InfoBarType,
  SAMPLE_CASE: 'SAMPLE_CASE' as InfoBarType,
  SAMPLE_EVENT_PARTICIPANT: 'SAMPLE_EVENT_PARTICIPANT' as InfoBarType,
  SAMPLE_CONTACT: 'SAMPLE_CONTACT' as InfoBarType,
  SAMPLE_PATHOGEN: 'SAMPLE_PATHOGEN' as InfoBarType,
  SAMPLE_ADDITIONAL: 'SAMPLE_ADDITIONAL' as InfoBarType,
  CONTACT: 'CONTACT' as InfoBarType,
  IMMUNIZATION: 'IMMUNIZATION' as InfoBarType,
  ENTRY: 'ENTRY' as InfoBarType,
};

export type FetchStatus = 'ERROR' | 'NO_DATA' | 'NO_MATCH';

export const FetchStatusType = {
  ERROR: 'ERROR' as FetchStatus,
  NO_DATA: 'NO_DATA' as FetchStatus,
  NO_MATCH: 'NO_MATCH' as FetchStatus,
};

export type FormGroupStyle = 'BASIC' | 'CARD' | 'COLLAPSABLE';

export const FormGroupStyleType = {
  BASIC: 'BASIC' as FormGroupStyle,
  CARD: 'CARD' as FormGroupStyle,
  COLLAPSABLE: 'COLLAPSABLE' as FormGroupStyle,
};

export type ViewOptions = 'PRIMARY' | 'SECONDARY';

export const VIEW_OPTIONS = {
  PRIMARY: 'PRIMARY' as ViewOptions,
  SECONDARY: 'SECONDARY' as ViewOptions,
};
