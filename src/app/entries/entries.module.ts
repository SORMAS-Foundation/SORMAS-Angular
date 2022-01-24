import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { EntriesRoutingModule } from './entries.routing-module';
import { EntriesListComponent } from './entries-list/entries-list.component';
import { EntriesFiltersComponent } from './entries-filters/entries-filters.component';
import { EntriesComponent } from './entries.component';

@NgModule({
  declarations: [EntriesComponent, EntriesListComponent, EntriesFiltersComponent],
  imports: [CommonModule, EntriesRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class EntriesModule {}
