import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { MaterialModule } from '../material.module';
import { StatsComponent } from './stats.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ExportsComponent } from './exports/exports.component';
import { StatsRoutingModule } from './stats-routing.module';
import { StatisticsFiltersComponent } from './statistics/statistics-filters/statistics-filters.component';
import { StatisticsListComponent } from './statistics/statistics-list/statistics-list.component';
import { StatisticsOptionsComponent } from './statistics/statistics-options/statistics-options.component';
import { StatisticsResultsComponent } from './statistics/statistics-results/statistics-results.component';

@NgModule({
  declarations: [
    StatsComponent,
    StatisticsComponent,
    ExportsComponent,
    StatisticsFiltersComponent,
    StatisticsListComponent,
    StatisticsOptionsComponent,
    StatisticsResultsComponent,
  ],
  imports: [CommonModule, MaterialModule, SharedModule, DynamicFormModule, StatsRoutingModule],
})
export class StatsModule {}
