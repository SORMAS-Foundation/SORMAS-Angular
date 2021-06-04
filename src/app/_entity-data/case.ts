import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { CaseLink } from '../app.constants';

// case routing for tabs

export const caseLinks = (caseId: string): CaseLink[] => {
  return [
    { link: `/cases/case/${caseId}/details`, title: _('Case') },
    { link: `/cases/case/${caseId}/person`, title: _('Case person') },
    { link: `/cases/case/${caseId}/hospitalization`, title: _('Hospitalization') },
    { link: `/cases/case/${caseId}/port-health`, title: _('Port health') },
    { link: `/cases/case/${caseId}/symptoms`, title: _('Symptoms') },
    { link: `/cases/case/${caseId}/epidemiological-data`, title: _('Epidemiological data') },
    { link: `/cases/case/${caseId}/therapy`, title: _('Therapy') },
    { link: `/cases/case/${caseId}/follow-up`, title: _('Follow-up') },
    { link: `/cases/case/${caseId}/clinical-course`, title: _('Clinical course') },
    { link: `/cases/case/${caseId}/contacts`, title: _('Contacts') },
  ];
};
