import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImmunizationListComponent } from './immunization-list/immunization-list.component';
import { ImmunizationsComponent } from './immunizations.component';
import { LeaveGuard } from '../_guards/leave-guard';
import { ImmunizationProfileComponent } from './immunization-components/immunization-profile/immunization-profile.component';
import { ImmunizationPersonComponent } from './immunization-components/immunization-person/immunization-person.component';
import { ImmunizationComponent } from './immunization/immunization.component';

const routes: Routes = [
  {
    path: '',
    component: ImmunizationsComponent,
    children: [
      { path: 'list', component: ImmunizationListComponent },
      {
        path: 'immunization/:immunizationId',
        component: ImmunizationComponent,
        children: [
          { path: 'profile', component: ImmunizationProfileComponent, canActivate: [LeaveGuard] },
          { path: 'person', component: ImmunizationPersonComponent, canActivate: [LeaveGuard] },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImmunizationsRoutingModule {}
