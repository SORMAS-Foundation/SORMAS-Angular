export * from './_constants/form-data';
export * from './_constants/icons';
export * from './_constants/api';
export * from './_constants/notifications';
export * from './_constants/enums';

export const VIRTUAL_SCROLL_DEFAULT_ROW_HEIGHT = 54;
export const VIRTUAL_SCROLL_DEFAULT_HEADER_HEIGHT = 56;

export enum CaseTitles {
  NO_OUTCOME = 'No outcome',
  NOT_CLASSIFIED = 'Not yet classified',
  DECEASED = 'Deceased',
  RECOVERED = 'Recovered',
  UNKOWN = 'Unknown',
}

// pagination
export const PAGE_SIZE = 7;

// case-tab-links
export type CaseLink = {
  title: string;
  link: string;
};
