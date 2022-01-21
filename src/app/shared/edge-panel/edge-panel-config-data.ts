export const PANEL_CONFIG = {
  TASK: {
    title: 'strings.entityTasks',
    action: 'captions.taskNewTask',
    cardType: 'case_task',
    cardTitleKey: 'taskType',
    cardStatusKey: 'taskStatus',
  },
  SAMPLE: {
    title: 'strings.entitySamples',
    action: 'captions.sampleNewSample',
    cardType: 'sample',
    cardTitleKey: 'sampleMaterial',
    cardStatusKey: 'pathogenTestResult',
    appearance: 'outlined',
  },
  EVENT: {
    title: 'strings.entityEvents',
    action: 'captions.linkEvent',
    cardType: 'case_event',
    cardTitleKey: 'eventTitle',
  },
  PERSON_EVENT: {
    title: 'strings.entityEvents',
    action: 'captions.personLinkToEvents',
    cardType: 'person_event',
    cardTitleKey: 'uuid',
    titleUppercase: true,
  },
  CASE: {
    title: 'strings.entityCases',
    action: 'captions.personLinkToCases',
    cardType: 'person_case',
    cardTitleKey: 'uuid',
    appearance: 'outlined',
    cardStatus: 'unclassified',
    titleUppercase: true,
  },
  CONTACT: {
    title: 'strings.entityContacts',
    action: 'captions.personLinkToContacts',
    cardType: 'person_contact',
    cardTitleKey: 'uuid',
    appearance: 'outlined',
    titleUppercase: true,
  },
  PATHOGEN: {
    title: 'strings.entityPathogenTests',
    action: 'strings.headingNewTestResults',
    cardType: 'sample_pathogen',
    cardTitleKey: 'sample.uuid',
    cardStatusKey: 'testResult',
  },
  ADDITIONAL: {
    title: 'strings.headingAdditionalTests',
    action: 'strings.headingNewTestResults',
    cardType: 'sample_additional',
    cardTitleKey: 'creationDate',
    titleDateFormat: 'd MMM h:mm aa',
  },
  VACCINATION: {
    title: 'captions.Immunization.vaccinations',
    action: 'newVaccine',
    cardType: 'vaccination',
    cardTitleKey: 'creationDate',
    titleDateFormat: 'd MMM h:mm aa',
  },
};
