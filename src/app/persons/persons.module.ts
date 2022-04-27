import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './persons.component';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { PersonsRoutingModule } from './persons-routing.module';
import { MaterialModule } from '../material.module';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonFiltersComponent } from './person-filters/person-filters.component';
import { PersonComponent } from './person/person.component';
import { SetMissingGeolocationComponent } from './set-missing-geolocation/set-missing-geolocation.component';

@NgModule({
  declarations: [
    PersonsComponent,
    PersonComponent,
    PersonsListComponent,
    PersonFiltersComponent,
    SetMissingGeolocationComponent,
  ],
  imports: [CommonModule, PersonsRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class PersonsModule {}
