import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveGuard } from '../_guards/leave-guard';
import { ExportsComponent } from './exports/exports.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatsComponent } from './stats.component';

const routes: Routes = [
  {
    path: '',
    component: StatsComponent,
    children: [
      { path: '', redirectTo: 'statistics', pathMatch: 'full' },
      { path: 'statistics', component: StatisticsComponent, canActivate: [LeaveGuard] },
      { path: 'exports', component: ExportsComponent, canActivate: [LeaveGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatsRoutingModule {}
