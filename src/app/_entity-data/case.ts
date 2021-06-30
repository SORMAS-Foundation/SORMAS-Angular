import { CaseLink } from '../app.constants';

// case routing for tabs

export const caseLinks = (caseId: string): CaseLink[] => {
  return [
    { link: `/cases/case/${caseId}/details`, title: 'entityCase' },
    { link: `/cases/case/${caseId}/person`, title: 'View.cases.person' },
    { link: `/cases/case/${caseId}/hospitalization`, title: 'CaseHospitalization' },
    { link: `/cases/case/${caseId}/port-health`, title: 'View.cases.porthealthinfo' },
    { link: `/cases/case/${caseId}/symptoms`, title: 'Symptoms' },
    { link: `/cases/case/${caseId}/epidemiological-data`, title: 'EpiData' },
    { link: `/cases/case/${caseId}/therapy`, title: 'CaseData.therapy' },
    { link: `/cases/case/${caseId}/follow-up`, title: 'caseFollowupVisitsView' },
    { link: `/cases/case/${caseId}/clinical-course`, title: 'View.cases.clinicalcourse' },
    { link: `/cases/case/${caseId}/contacts`, title: 'caseContacts' },
  ];
};
