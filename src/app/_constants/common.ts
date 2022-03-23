import { CaseOrigin } from '../_models/caseOrigin';
import { FollowUpStatus } from '../_models/followUpStatus';
import { PointOfEntryType } from '../_models/pointOfEntryType';
import { DateFilterOptions } from './enums';

export const VIRTUAL_SCROLL_DEFAULT_ROW_HEIGHT = 48;
export const VIRTUAL_SCROLL_DEFAULT_HEADER_HEIGHT = 56;
export const TABLE_MAX_COLUMN_WIDTH = 200;
export const UUID_KEY = 'uuid';

export enum AdvancedDataType {
  DISPLAY = 'Display',
  LINK = 'Link',
}

// Send resource data to any component specified in this enum
export enum SentResourceTypes {
  EPIDEMIOLOGICAL_DATA = 'epidemiological_data',
  PERSON_DATA = 'person_data',
  EVENT_PARTICIPANT_DATA = 'event_participant_data',
  ENTITY_FORM_DATA = 'entity_form_data',
  LINE_LISTING_DATA = 'line_listing_data',
  CONTACT_DATA = 'contact_data',
}

// pagination
export const PAGE_SIZE = 7;

// case-tab-links
export type EntityLink = {
  title: string;
  link: string;
  showFormActions?: boolean;
};

// modals
export const ADD_MODAL_NARROW = '720px';
export const ADD_MODAL_WIDE = '840px';
export const MODAL_MEDIUM_WIDTH = '940px';
export const ADD_MODAL_MAX_WIDTH = '100vw';
export const CASE_EXPORT_CUSTOM_MODAL_WIDTH = '776px';
export const CASE_IMPORT_MODAL_WIDTH = '720px';
export const CONFIGURATION_MODAL_WIDTH = '550px';
export const POPULATION_IMPORT_MODAL_WIDTH = '720px';

export const HEADER_HEIGHT = 68;
export const HEADING_TABS_HEIGHT = 108;

// sidebar panels
export const EDGE_PANEL_INITIAL_SIZE_SINGLE_COLUMN = 3;
export const EDGE_PANEL_INITIAL_SIZE_DOUBLE_COLUMN = 4;
export type EdgePanelType =
  | 'TASK'
  | 'SAMPLE'
  | 'EVENT'
  | 'PERSON_EVENT'
  | 'CASE'
  | 'CONTACT'
  | 'PATHOGEN'
  | 'ADDITIONAL'
  | 'VACCINATION';
export const EDGE_PANEL_TYPE = {
  TASK: 'TASK' as EdgePanelType,
  SAMPLE: 'SAMPLE' as EdgePanelType,
  EVENT: 'EVENT' as EdgePanelType,
  PERSON_EVENT: 'PERSON_EVENT' as EdgePanelType,
  CASE: 'CASE' as EdgePanelType,
  CONTACT: 'CONTACT' as EdgePanelType,
  PATHOGEN: 'PATHOGEN' as EdgePanelType,
  ADDITIONAL: 'ADDITIONAL' as EdgePanelType,
  VACCINATION: 'VACCINATION' as EdgePanelType,
};

// date format
export const DEFAULT_DATE_FORMAT = 'd/M/yyyy';
export const DAY_DATE_FORMAT = 'dd';
export const MONTH_DATE_TEXT_FORMAT = 'MMM';
export const HOUR_MINUTE_TIME_FORMAT = 'h:mm';
export const BRIEF_DATE_FORMAT = 'M/d';
export const COMMON_DATE_FORMAT = 'M/d/yyyy';
export const MONTH_MEDIUM_DATE_FORMAT = 'MMM yyyy';
export const WEEK_OF_YEAR_DATE_FORMAT = 'w-yyyy';

export type ButtonType = 'STANDARD' | 'STROKED' | 'FLAT';
export const BUTTON_TYPE = {
  STANDARD: 'STANDARD' as ButtonType,
  STROKED: 'STROKED' as ButtonType,
  FLAT: 'FLAT' as ButtonType,
};

// loader
export const SPINNER_DELAY = 100;

// Contact detail contact-risk mapping
export const CONTACT_RISKS = [
  { category: 'HIGH_RISK', values: ['TOUCHED_FLUID', 'FACE_TO_FACE_LONG', 'AEROSOL'] },
  { category: 'HIGH_RISK_MED', values: ['MEDICAL_UNSAFE'] },
  { category: 'MEDIUM_RISK_MED', values: ['MEDICAL_LIMITED'] },
  { category: 'LOW_RISK', values: ['SAME_ROOM', 'FACE_TO_FACE_SHORT', 'MEDICAL_SAME_ROOM'] },
  {
    category: 'NO_RISK',
    values: [
      'MEDICAL_SAFE',
      'MEDICAL_DISTANT',
      'PHYSICAL_CONTACT',
      'CLOTHES_OR_OTHER',
      'CLOSE_CONTACT',
      'AIRPLANE',
    ],
  },
];

export const CASE_ORIGIN = {
  IN_COUNTRY: 'IN_COUNTRY' as CaseOrigin,
  POINT_OF_ENTRY: 'POINT_OF_ENTRY' as CaseOrigin,
};

export const POINT_OF_ENTRY_TYPE = {
  AIRPORT: 'AIRPORT' as PointOfEntryType,
  SEAPORT: 'SEAPORT' as PointOfEntryType,
  GROUND_CROSSING: 'GROUND_CROSSING' as PointOfEntryType,
  OTHER: 'OTHER' as PointOfEntryType,
};

export const FOLLOW_UP_STATUS = {
  FOLLOW_UP: 'FOLLOW_UP' as FollowUpStatus,
  COMPLETED: 'COMPLETED' as FollowUpStatus,
  CANCELED: 'CANCELED' as FollowUpStatus,
  LOST: 'LOST' as FollowUpStatus,
  NO_FOLLOW_UP: 'NO_FOLLOW_UP' as FollowUpStatus,
};

export const DATE_TYPE_OPTIONS = {
  DATE: 'DATE' as DateFilterOptions,
  EPI_WEEK: 'EPI_WEEK' as DateFilterOptions,
};

export const DEFAULT_FETCH_METHOD = 'getAllAsOptions';

export const DASHBOARD_CONTACTS_DISEASE_LIMIT = 5;
export const PERIOD_PICKER_DEFAULT_RANGE = 14;
export const PERIOD_PICKER_MAX_RANGE = 90;

export type PickPersonType = 'SELECT' | 'SEARCH_AND_SELECT' | 'CREATE_NEW';
export const PICK_PERSON_OPTIONS = {
  SELECT: 'SELECT' as PickPersonType,
  SEARCH_AND_SELECT: 'SEARCH_AND_SELECT' as PickPersonType,
  CREATE_NEW: 'CREATE_NEW' as PickPersonType,
};

export const DISPLAY_MODE = {
  LIST: 'LIST',
  TABLE: 'TABLE',
};

export const DASHBOARD_EPIDEMIOLOGICAL_CURVE_TYPE = {
  CASE: 'CASE',
  CONTACT: 'CONTACT',
};
