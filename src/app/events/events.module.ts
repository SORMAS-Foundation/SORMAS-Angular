import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventsListComponent } from './events-list/events-list.component';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { EventsRoutingModule } from './events-routing.module';
import { MaterialModule } from '../material.module';
import { EventFiltersComponent } from './event-filters/event-filters.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventDataComponent } from './event-components/event-data/event-data.component';
import { EventParticipantsComponent } from './event-components/event-participants/event-participants.component';
import { EventParticipantsProfileComponent } from './event-components/event-participants-profile/event-participants-profile.component';
import { EventActionsComponent } from './event-components/event-actions/event-actions.component';
import { EventComponent } from './event/event.component';
import { EventParticipantsFiltersComponent } from './event-components/event-participants-filters/event-participants-filters.component';
import { EventGroupAddEventsModalComponent } from './event-group-add-events-modal/event-group-add-events-modal.component';
import { EventGroupAddModalComponent } from './event-group-add-modal/event-group-add-modal.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventsListComponent,
    EventFiltersComponent,
    EventAddComponent,
    EventEditComponent,
    EventDataComponent,
    EventParticipantsComponent,
    EventParticipantsProfileComponent,
    EventActionsComponent,
    EventComponent,
    EventParticipantsFiltersComponent,
    EventGroupAddEventsModalComponent,
    EventGroupAddModalComponent,
  ],
  imports: [CommonModule, EventsRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class EventsModule {}
