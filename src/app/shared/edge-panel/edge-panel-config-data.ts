
export const PANEL_CONFIG = {
  TASK: {
    title: 'entityTasks',
    action: 'taskNewTask',
    cardType: 'case_task',
    cardTitleKey: 'taskType',
    cardStatusKey: 'taskStatus',
  },
  SAMPLE: {
    title: 'entitySamples',
    action: 'sampleNewSample',
    cardType: 'sample',
    cardTitleKey: 'sampleMaterial',
    cardStatusKey: 'pathogenTestResult',
    appearance: 'outlined',
  },
  EVENT: {
    title: 'entityEvents',
    action: 'linkEvent',
    cardType: 'case_event',
    cardTitleKey: 'eventTitle',
  },
  PERSON_EVENT: {
    title: 'entityEvents',
    action: 'personLinkToEvents',
    cardType: 'person_event',
    cardTitleKey: 'uuid',
  },
  CASE: {
    title: 'entityCases',
    action: 'personLinkToCases',
    cardType: 'person_case',
    cardTitleKey: 'uuid',
    appearance: 'outlined',
    cardStatus: 'unclassified',
  },
  CONTACT: {
    title: 'entityContacts',
    action: 'personLinkToContacts',
    cardType: 'person_contact',
    cardTitleKey: 'uuid',
    appearance: 'outlined',
  }
};
