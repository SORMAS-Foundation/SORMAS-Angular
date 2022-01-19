import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { MsersRoutingModule } from './msers-routing.module';
import { MaterialModule } from '../material.module';
import { MsersListComponent } from './msers-list/msers-list.component';
import { MsersFiltersComponent } from './msers-filters/msers-filters.component';
import { MsersComponent } from './msers.component';

@NgModule({
  declarations: [MsersComponent, MsersListComponent, MsersFiltersComponent],
  imports: [CommonModule, MsersRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class MsersModule {}
