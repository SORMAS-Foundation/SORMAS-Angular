import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { ActionsRoutingModule } from './actions-routing.module';
import { ActionsComponent } from './actions.component';
import { ActionsListComponent } from './actions-list/actions-list.component';
import { ActionFiltersComponent } from './action-filters/action-filters.component';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [ActionsComponent, ActionsListComponent, ActionFiltersComponent],
  imports: [CommonModule, ActionsRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class ActionsModule {}
