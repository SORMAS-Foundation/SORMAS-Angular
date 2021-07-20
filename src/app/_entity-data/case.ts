import { CaseLink } from '../app.constants';

// case routing for tabs

export const caseLinks = (caseId: string): CaseLink[] => {
  return [
    { link: `/cases/case/${caseId}/details`, title: 'strings.entityCase' },
    { link: `/cases/case/${caseId}/person`, title: 'captions.View.cases.person' },
    { link: `/cases/case/${caseId}/hospitalization`, title: 'captions.CaseHospitalization' },
    { link: `/cases/case/${caseId}/port-health`, title: 'captions.CaseData.portHealthInfo' },
    { link: `/cases/case/${caseId}/symptoms`, title: 'captions.Symptoms' },
    { link: `/cases/case/${caseId}/epidemiological-data`, title: 'captions.EpiData' },
    { link: `/cases/case/${caseId}/therapy`, title: 'captions.CaseData.therapy' },
    { link: `/cases/case/${caseId}/follow-up`, title: 'captions.caseFollowupVisitsView' },
    { link: `/cases/case/${caseId}/clinical-course`, title: 'captions.View.cases.clinicalcourse' },
    { link: `/cases/case/${caseId}/contacts`, title: 'captions.caseContacts' },
  ];
};
