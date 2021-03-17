import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasesComponent } from './cases.component';
import { CasesListComponent } from './cases-list/cases-list.component';
import { CaseComponent } from './case/case.component';
import { CaseDetailsComponent } from './case_components/case-details/case-details.component';
import { CasePersonComponent } from './case_components/case-person/case-person.component';
import { CaseHospitalizationComponent } from './case_components/case-hospitalization/case-hospitalization.component';
import { CaseSymptomsComponent } from './case_components/case-symptoms/case-symptoms.component';
import { CaseEpidemiologicalDataComponent } from './case_components/case-epidemiological-data/case-epidemiological-data.component';
import { CaseTherapyComponent } from './case_components/case-therapy/case-therapy.component';
import { CaseFollowUpComponent } from './case_components/case-follow-up/case-follow-up.component';
import { CaseClinicalCourseComponent } from './case_components/case-clinical-course/case-clinical-course.component';
import { CaseContactsComponent } from './case_components/case-contacts/case-contacts.component';

const routes: Routes = [
  {
    path: '',
    component: CasesComponent,
    children: [
      { path: 'list', component: CasesListComponent },
      {
        path: 'case/:caseId',
        component: CaseComponent,
        children: [
          { path: 'details', component: CaseDetailsComponent },
          { path: 'person', component: CasePersonComponent },
          { path: 'hospitalization', component: CaseHospitalizationComponent },
          { path: 'symptoms', component: CaseSymptomsComponent },
          { path: 'epidemiological-data', component: CaseEpidemiologicalDataComponent },
          { path: 'therapy', component: CaseTherapyComponent },
          { path: 'follow-up', component: CaseFollowUpComponent },
          { path: 'clinical-course', component: CaseClinicalCourseComponent },
          { path: 'contacts', component: CaseContactsComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasesRoutingModule {}
