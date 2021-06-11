import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventsListComponent } from './events-list/events-list.component';
import { LeaveGuard } from '../_guards/leave-guard';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    children: [{ path: 'list', component: EventsListComponent, canActivate: [LeaveGuard] }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
