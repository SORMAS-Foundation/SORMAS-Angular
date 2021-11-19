import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventsListComponent } from './events-list/events-list.component';
import { LeaveGuard } from '../_guards/leave-guard';
import { EventComponent } from './event/event.component';
import { EventDataComponent } from './event-components/event-data/event-data.component';
import { EventParticipantsComponent } from './event-components/event-participants/event-participants.component';
import { EventActionsComponent } from './event-components/event-actions/event-actions.component';
import { EventParticipantsProfileComponent } from './event-components/event-participants-profile/event-participants-profile.component';
import { EventGroupProfileComponent } from './event-group-profile/event-group-profile.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    children: [
      { path: 'list', component: EventsListComponent },
      {
        path: 'event/:eventId',
        component: EventComponent,
        children: [
          { path: 'details', component: EventDataComponent, canActivate: [LeaveGuard] },
          {
            path: 'participants',
            component: EventParticipantsComponent,
            canActivate: [LeaveGuard],
          },
          { path: 'actions', component: EventActionsComponent, canActivate: [LeaveGuard] },
          {
            path: 'participants-profile/:participantId',
            component: EventParticipantsProfileComponent,
            canActivate: [LeaveGuard],
          },
        ],
      },
    ],
  },
  {
    path: 'event-group/:eventGroupId',
    component: EventGroupProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
