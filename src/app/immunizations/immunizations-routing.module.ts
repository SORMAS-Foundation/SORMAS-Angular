import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImmunizationListComponent } from './immunization-list/immunization-list.component';
import { ImmunizationsComponent } from './immunizations.component';

const routes: Routes = [
  {
    path: '',
    component: ImmunizationsComponent,
    children: [{ path: 'list', component: ImmunizationListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImmunizationsRoutingModule {}
