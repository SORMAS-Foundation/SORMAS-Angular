import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [MapComponent, DashboardComponent],
  imports: [RouterModule.forChild(routes), CommonModule, LeafletModule],
  exports: [RouterModule],
})
export class DashboardModule {}
