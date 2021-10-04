import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { LeaveGuard } from '../_guards/leave-guard';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: 'list', component: UsersListComponent, canActivate: [LeaveGuard] },
      { path: 'user/:userId', component: UserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
