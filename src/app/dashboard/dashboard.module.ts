import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [MapComponent, DashboardComponent],
  imports: [CommonModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
