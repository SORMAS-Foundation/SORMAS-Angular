export * from './_constants/form-data';
export * from './_constants/icons';
export * from './_constants/api';
export * from './_constants/notifications';
export * from './_constants/enums';

export const VIRTUAL_SCROLL_TABLE_VISIBLE_ROWS_COUNT = 8;
export const VIRTUAL_SCROLL_PAGE_SIZE = 8;

export enum CaseTitles {
  NO_OUTCOME = 'No outcome',
  NOT_CLASSIFIED = 'Not yet classified',
  DECEASED = 'Deceased',
  RECOVERED = 'Recovered',
  UNKOWN = 'Unknown',
}

// Send resource data to any component specified in this enum
export enum SentResourceTypes {
  EPIDEMIOLOGICAL_DATA = 'epidemiological_data',
}

// pagination
export const PAGE_SIZE = 7;

// case-tab-links
export type CaseLink = {
  title: string;
  link: string;
};
