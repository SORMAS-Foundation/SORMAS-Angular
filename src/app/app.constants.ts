export const VIRTUAL_SCROLL_TABLE_VISIBLE_ROWS_COUNT = 8;
export const VIRTUAL_SCROLL_PAGE_SIZE = 8;

// api routes
export const API_ROUTE_MAIN = 'sormas-rest';
export const API_ROUTE_CASES = {
  ENDPOINT: 'cases',
  GET_ALL: 'cases/caseIndex',
  GET_BY_ID: 'cases/query',
};

// icons
export enum IconsMap {
  PENDING = 'pending_actions',
  DONE = 'done',
  DISCARDED = 'cancel_presentation',
}

export enum CaseOutcomeIcons {
  NO_OUTCOME = 'timelapse',
  DECEASED = 'person_off',
  RECOVERED = 'how_to_reg',
  UNKNOWN = 'help_outline',
}

export enum CaseTitles {
  NO_OUTCOME = 'No outcome',
  NOT_CLASSIFIED = 'Not yet classified',
  DECEASED = 'Deceased',
  RECOVERED = 'Recovered',
  UNKOWN = 'Unknown',
}

export enum CaseClassificationIcons {
  NOT_CLASSIFIED = 'cached',
  SUSPECT = 'person_search',
  PROBABLE = 'queue',
  CONFIRMED = 'new_releases',
  CONFIRMED_NO_SYMPTOMS = 'new_releases',
  CONFIRMED_UNKNOWN_SYMPTOMS = 'new_releases',
  NO_CASE = 'how_to_reg',
}

// pagination
export const PAGE_SIZE = 7;

// case-tab-links
export type CaseLink = {
  title: string;
  link: string;
};
