import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdsPlaygroundComponent } from './pds-playground.component';

const routes: Routes = [{ path: '', component: PdsPlaygroundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdsPlaygroundRoutingModule {}
