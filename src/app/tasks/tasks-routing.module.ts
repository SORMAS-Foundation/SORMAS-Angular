import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { LeaveGuard } from '../_guards/leave-guard';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    children: [{ path: 'list', component: TasksListComponent, canActivate: [LeaveGuard] }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
