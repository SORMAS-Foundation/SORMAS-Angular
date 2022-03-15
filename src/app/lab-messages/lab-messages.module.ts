import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { LabMessagesListComponent } from './lab-messages-list/lab-messages-list.component';
import { LabMessagesRoutingModule } from './lab-messages-routing.module';
import { LabMessageComponent } from './lab-message/lab-message.component';
import { LabMessagesFiltersComponent } from './lab-messages-filters/lab-messages-filters.component';
import { LabMessagesComponent } from './lab-messages.component';
import { LabMessageAssignComponent } from './lab-message-assign/lab-message-assign.component';

@NgModule({
  declarations: [
    LabMessagesComponent,
    LabMessageComponent,
    LabMessagesListComponent,
    LabMessagesFiltersComponent,
    LabMessageAssignComponent,
  ],
  imports: [
    CommonModule,
    LabMessagesRoutingModule,
    MaterialModule,
    SharedModule,
    DynamicFormModule,
  ],
})
export class LabMessagesModule {}
