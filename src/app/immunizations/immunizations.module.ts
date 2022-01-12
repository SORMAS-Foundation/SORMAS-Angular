import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImmunizationsComponent } from './immunizations.component';
import { ImmunizationListComponent } from './immunization-list/immunization-list.component';
import { ImmunizationsRoutingModule } from './immunizations-routing.module';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { ImmunizationFiltersComponent } from './immunization-filters/immunization-filters.component';
import { ImmunizationComponent } from './immunization/immunization.component';
import { ImmunizationProfileComponent } from './immunization-components/immunization-profile/immunization-profile.component';
import { ImmunizationPersonComponent } from './immunization-components/immunization-person/immunization-person.component';
import { ImmunizationAddComponent } from './immunization-add/immunization-add.component';

@NgModule({
  declarations: [
    ImmunizationsComponent,
    ImmunizationFiltersComponent,
    ImmunizationListComponent,
    ImmunizationComponent,
    ImmunizationProfileComponent,
    ImmunizationPersonComponent,
    ImmunizationAddComponent,
  ],
  imports: [
    CommonModule,
    ImmunizationsRoutingModule,
    MaterialModule,
    SharedModule,
    DynamicFormModule,
  ],
})
export class ImmunizationsModule {}
