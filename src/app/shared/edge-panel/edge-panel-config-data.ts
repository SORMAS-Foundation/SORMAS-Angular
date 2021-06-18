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
};
