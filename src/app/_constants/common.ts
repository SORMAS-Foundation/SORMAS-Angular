export const VIRTUAL_SCROLL_DEFAULT_ROW_HEIGHT = 48;
export const VIRTUAL_SCROLL_DEFAULT_HEADER_HEIGHT = 56;
export const UUID_KEY = 'uuid';

export enum AdvancedDataType {
  DISPLAY = 'Display',
  LINK = 'Link',
}

// Send resource data to any component specified in this enum
export enum SentResourceTypes {
  EPIDEMIOLOGICAL_DATA = 'epidemiological_data',
  PERSON_DATA = 'person_data',
  PRESCRIPTION_DATA = 'prescription_data',
  TREATMENT_DATA = 'treatment_data',
}

// pagination
export const PAGE_SIZE = 7;

// case-tab-links
export type EntityLink = {
  title: string;
  link: string;
};

// modals
export const ADD_MODAL_MAX_WIDTH = '1200px';
export const CASE_EXPORT_CUSTOM_MODAL_WIDTH = '776px';
export const CASE_IMPORT_MODAL_WIDTH = '720px';

export const HEADER_HEIGHT = 68;

// sidebar panels
export const EDGE_PANEL_INITIAL_SIZE_SINGLE_COLUMN = 3;
export const EDGE_PANEL_INITIAL_SIZE_DOUBLE_COLUMN = 4;
export type EdgePanelType = 'TASK' | 'SAMPLE' | 'EVENT' | 'PERSON_EVENT' | 'CASE' | 'CONTACT';
export const EDGE_PANEL_TYPE = {
  TASK: 'TASK' as EdgePanelType,
  SAMPLE: 'SAMPLE' as EdgePanelType,
  EVENT: 'EVENT' as EdgePanelType,
  PERSON_EVENT: 'PERSON_EVENT' as EdgePanelType,
  CASE: 'CASE' as EdgePanelType,
  CONTACT: 'CONTACT' as EdgePanelType,
};

// date format
export const DEFAULT_DATE_FORMAT = 'd/m/yyyy';
export const DAY_DATE_FORMAT = 'dd';
export const MONTH_DATE_TEXT_FORMAT = 'MMM';
