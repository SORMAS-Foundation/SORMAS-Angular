import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasesComponent } from './cases.component';
import { CasesListComponent } from './cases-list/cases-list.component';
import { CaseComponent } from './case/case.component';

const routes: Routes = [
  {
    path: '',
    component: CasesComponent,
    children: [
      { path: 'list', component: CasesListComponent },
      {
        path: 'case/:caseId',
        component: CaseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasesRoutingModule {}
