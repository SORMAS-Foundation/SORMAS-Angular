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
  CONFIRMED = 'connect without contact',
  NO_CONTACT = 'voice over off',
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
  UNCOOPERATIVE = 'highlight_off',
  NOT_PERFORMED = 'remove',
}
