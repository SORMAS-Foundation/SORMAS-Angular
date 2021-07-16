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
};
