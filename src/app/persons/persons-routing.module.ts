import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './persons.component';
import { LeaveGuard } from '../_guards/leave-guard';
import { PersonsListComponent } from './persons-list/persons-list.component';

const routes: Routes = [
  {
    path: '',
    component: PersonsComponent,
    children: [{ path: 'list', component: PersonsListComponent, canActivate: [LeaveGuard] }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonsRoutingModule {}
