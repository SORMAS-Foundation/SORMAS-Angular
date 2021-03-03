import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseComponent } from './case.component';

const routes: Routes = [{ path: '', component: CaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseRoutingModule {}
