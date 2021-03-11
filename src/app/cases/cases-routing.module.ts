import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasesComponent } from './cases.component';
import { CasesListComponent } from './cases-list/cases-list.component';
import { CaseComponent } from './case/case.component';
import { CaseDetailsComponent } from './case_components/case-details/case-details.component';
import { CasePersonComponent } from './case_components/case-person/case-person.component';
import { CaseHospitalizationComponent } from './case_components/case-hospitalization/case-hospitalization.component';

const routes: Routes = [
  {
    path: '',
    component: CasesComponent,
    children: [
      { path: 'list',
        component: CasesListComponent
      },
      {
        path: 'case/:caseId',
        component: CaseComponent,
        children: [
          { path: 'details',
            component: CaseDetailsComponent
          },
          { path: 'person',
            component: CasePersonComponent
          },
          { path: 'hospitalization',
            component: CaseHospitalizationComponent
          },
        ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasesRoutingModule {}
