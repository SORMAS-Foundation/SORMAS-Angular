import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { ReportsRegionSummaryComponent } from './reports-region-summary/reports-region-summary.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [{ path: 'list', component: ReportsRegionSummaryComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
