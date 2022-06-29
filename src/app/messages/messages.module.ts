import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessageComponent } from './message/message.component';
import { MessagesFiltersComponent } from './messages-filters/messages-filters.component';
import { MessagesComponent } from './messages.component';
import { MessageAssignComponent } from './message-assign/message-assign.component';

@NgModule({
  declarations: [
    MessagesComponent,
    MessageComponent,
    MessagesListComponent,
    MessagesFiltersComponent,
    MessageAssignComponent,
  ],
  imports: [CommonModule, MessagesRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class MessagesModule {}
