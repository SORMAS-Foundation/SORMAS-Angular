import { CaseLink } from '../app.constants';

// case routing for tabs

export const caseLinks = (caseId: string): CaseLink[] => {
  return [
    { link: `/cases/case/${caseId}/details`, title: 'Case' },
    { link: `/cases/case/${caseId}/person`, title: 'Case person' },
    { link: `/cases/case/${caseId}/hospitalization`, title: 'Hospitalization' },
    { link: `/cases/case/${caseId}/port-health`, title: 'Port health' },
    { link: `/cases/case/${caseId}/symptoms`, title: 'Symptoms' },
    { link: `/cases/case/${caseId}/epidemiological-data`, title: 'Epidemiological data' },
    { link: `/cases/case/${caseId}/therapy`, title: 'Therapy' },
    { link: `/cases/case/${caseId}/follow-up`, title: 'Follow-up' },
    { link: `/cases/case/${caseId}/clinical-course`, title: 'Clinical course' },
    { link: `/cases/case/${caseId}/contacts`, title: 'Contacts' },
  ];
};
