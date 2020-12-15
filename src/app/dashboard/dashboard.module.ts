import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './map/map.component';
import { DashboardComponent } from './dashboard.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [MapComponent, DashboardComponent, CardsComponent],
  imports: [RouterModule.forChild(routes), CommonModule, LeafletModule, HttpClientModule],
  exports: [RouterModule],
})
export class DashboardModule {}
