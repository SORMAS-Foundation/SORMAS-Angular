export enum IconsMap {
  PENDING = 'pending_actions',
  DONE = 'done',
  DISCARDED = 'cancel_presentation',
  DIALOG_ICON_TITLE_ALERT = 'warning_amber',
  DIALOG_ICON_CLOSE = 'highlight_off',
  ONGOING = 'refresh',
  true = 'check_circle_black',
  false = 'not_interested',
  EMAIL = 'mail_outline',
  PHONE = 'call',
  RISING = 'keyboard_arrow_up',
  FALLING = 'keyboard_arrow_down',
  STAGNANT = 'keyboard_arrow_right',
}

export enum CaseOutcomeIcons {
  NO_OUTCOME = 'timelapse',
  DECEASED = 'person_off',
  RECOVERED = 'how_to_reg',
  UNKNOWN = 'help_outline',
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

export enum ContactClassificationIcons {
  UNCONFIRMED = 'gpp_bad',
  CONFIRMED = 'connect_without_contact',
  NO_CONTACT = 'voice_over_off',
}

export enum EventStatusIcons {
  SIGNAL = 'wifi_tethering',
  EVENT = 'warning',
  SCREENING = 'travel_explore',
  CLUSTER = 'grain',
  DROPPED = 'disabled_by default',
}

export enum CardActionsIcons {
  edit = 'edit',
  delete = 'highlight_off',
  link = 'link',
  unlink = 'link_off',
  refresh = 'sync',
}

export enum LegendFollowUpIcons {
  NOT_SYMPTOMATIC = 'sentiment_satisfied_alt',
  SYMPTOMATIC = 'sick',
  UNAVAILABLE = 'block',
  UNCOOPERATIVE = 'cancel',
  NOT_PERFORMED = 'remove',
}

export const PATH_ICON_HEALTH_AND_SAFETY =
  'M10.5,13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13z M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2 z';
export const PATH_ICON_CACHED =
  'M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z';
export const PATH_ICON_PERSON_SEARCH =
  'M 6,8 a 4,4 0 1,1 8,0 a 4,4 0 1,1 -8,0zM10.35,14.01C7.62,13.91,2,15.27,2,18v2h9.54C9.07,17.24,10.31,14.11,10.35,14.01z"/><path d="M19.43,18.02C19.79,17.43,20,16.74,20,16c0-2.21-1.79-4-4-4s-4,1.79-4,4c0,2.21,1.79,4,4,4c0.74,0,1.43-0.22,2.02-0.57 L20.59,22L22,20.59L19.43,18.02z M16,18c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C18,17.1,17.1,18,16,18z';
export const PATH_ICON_QUEUE =
  'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z';
export const PATH_ICON_NEW_RELEASES =
  'M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z';
export const PATH_ICON_SENTIMENT_SATISFIED_ALT =
  'M 14,9.5 a 1.5,1.5 0 1,1 3,0 a 1.5,1.5 0 1,1 -3,0zM 7,9.5 a 1.5,1.5 0 1,1 3,0 a 1.5,1.5 0 1,1 -3,0zM11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z';
export const PATH_ICON_SICK =
  'M21,9c-1.1,0-2-0.9-2-2c0-1.1,2-4,2-4s2,2.9,2,4C23,8.1,22.1,9,21,9z M17.5,7c0-0.73,0.41-1.71,0.92-2.66 C16.68,2.88,14.44,2,11.99,2C6.47,2,2,6.48,2,12c0,5.52,4.47,10,9.99,10C17.52,22,22,17.52,22,12c0-0.55-0.06-1.09-0.14-1.62 C21.58,10.45,21.3,10.5,21,10.5C19.07,10.5,17.5,8.93,17.5,7z M15.62,7.38l1.06,1.06L15.62,9.5l1.06,1.06l-1.06,1.06L13.5,9.5 L15.62,7.38z M7.32,8.44l1.06-1.06L10.5,9.5l-2.12,2.12l-1.06-1.06L8.38,9.5L7.32,8.44z M15.44,17c-0.69-1.19-1.97-2-3.44-2 s-2.75,0.81-3.44,2H6.88c0.3-0.76,0.76-1.43,1.34-1.99L5.24,13.3c-0.45,0.26-1.01,0.28-1.49,0c-0.72-0.41-0.96-1.33-0.55-2.05 c0.41-0.72,1.33-0.96,2.05-0.55c0.48,0.28,0.74,0.78,0.74,1.29l3.58,2.07c0.73-0.36,1.55-0.56,2.43-0.56c2.33,0,4.32,1.45,5.12,3.5 H15.44z';
export const PATH_ICON_ARROW_RIGHT_ALT = 'M16.01 11H4v2h12.01v3L20 12l-3.99-4z';
