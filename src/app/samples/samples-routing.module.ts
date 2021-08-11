import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveGuard } from '../_guards/leave-guard';
import { SamplesComponent } from './samples.component';
import { SamplesListComponent } from './samples-list/samples-list.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {
    path: '',
    component: SamplesComponent,
    children: [
      { path: 'list', component: SamplesListComponent, canActivate: [LeaveGuard] },
      { path: 'sample/:sampleId', component: SampleComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplesRoutingModule {}
