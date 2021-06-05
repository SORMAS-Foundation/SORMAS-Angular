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
import { LeaveGuard } from '../_guards/leave-guard';
import { CasePortHealthComponent } from './case_components/case-port-health/case-port-health.component';

const routes: Routes = [
  {
    path: '',
    component: CasesComponent,
    children: [
      { path: 'list', component: CasesListComponent, canActivate: [LeaveGuard] },
      {
        path: 'case/:caseId',
        component: CaseComponent,
        children: [
          { path: 'details', component: CaseDetailsComponent, canActivate: [LeaveGuard] },
          { path: 'person', component: CasePersonComponent, canActivate: [LeaveGuard] },
          {
            path: 'hospitalization',
            component: CaseHospitalizationComponent,
            canActivate: [LeaveGuard],
          },
          {
            path: 'port-health',
            component: CasePortHealthComponent,
            canActivate: [LeaveGuard],
          },
          { path: 'symptoms', component: CaseSymptomsComponent, canActivate: [LeaveGuard] },
          {
            path: 'epidemiological-data',
            component: CaseEpidemiologicalDataComponent,
            canActivate: [LeaveGuard],
          },
          { path: 'therapy', component: CaseTherapyComponent, canActivate: [LeaveGuard] },
          { path: 'follow-up', component: CaseFollowUpComponent, canActivate: [LeaveGuard] },
          {
            path: 'clinical-course',
            component: CaseClinicalCourseComponent,
            canActivate: [LeaveGuard],
          },
          { path: 'contacts', component: CaseContactsComponent, canActivate: [LeaveGuard] },
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
