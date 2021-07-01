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

@NgModule({
  declarations: [EventsComponent, EventsListComponent, EventFiltersComponent, EventAddComponent],
  imports: [CommonModule, EventsRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class EventsModule {}
