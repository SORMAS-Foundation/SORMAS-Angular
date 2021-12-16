import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImmunizationsComponent } from './immunizations.component';
import { ImmunizationListComponent } from './immunization-list/immunization-list.component';
import { ImmunizationsRoutingModule } from './immunizations-routing.module';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { ImmunizationFiltersComponent } from './immunization-filters/immunization-filters.component';

@NgModule({
  declarations: [ImmunizationsComponent, ImmunizationFiltersComponent, ImmunizationListComponent],
  imports: [
    CommonModule,
    ImmunizationsRoutingModule,
    MaterialModule,
    SharedModule,
    DynamicFormModule,
  ],
})
export class ImmunizationsModule {}
