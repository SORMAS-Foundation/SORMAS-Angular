import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveGuard } from '../_guards/leave-guard';
import { OutbreaksComponent } from './outbreaks/outbreaks.component';
import { ConfigurationComponent } from './configuration.component';
import { ContinentsComponent } from './continents/continents.component';
import { SubcontinentsComponent } from './subcontinents/subcontinents.component';
import { CountriesComponent } from './countries/countries.component';
import { RegionsComponent } from './regions/regions.component';
import { DistrictsComponent } from './districts/districts.component';
import { CommunitiesComponent } from './communities/communities.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { EntryPointsComponent } from './entry-points/entry-points.component';
import { PopulationComponent } from './population/population.component';
import { LineListingComponent } from './line-listing/line-listing.component';
import { DocumentTemplatesComponent } from './document-templates/document-templates.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationComponent,
    children: [
      { path: '', redirectTo: 'outbreaks', pathMatch: 'full' },
      { path: 'outbreaks', component: OutbreaksComponent, canActivate: [LeaveGuard] },
      { path: 'continents', component: ContinentsComponent, canActivate: [LeaveGuard] },
      { path: 'subcontinents', component: SubcontinentsComponent, canActivate: [LeaveGuard] },
      { path: 'countries', component: CountriesComponent, canActivate: [LeaveGuard] },
      { path: 'regions', component: RegionsComponent, canActivate: [LeaveGuard] },
      { path: 'districts', component: DistrictsComponent, canActivate: [LeaveGuard] },
      { path: 'communities', component: CommunitiesComponent, canActivate: [LeaveGuard] },
      { path: 'facilities', component: FacilitiesComponent, canActivate: [LeaveGuard] },
      { path: 'entry-points', component: EntryPointsComponent, canActivate: [LeaveGuard] },
      { path: 'population', component: PopulationComponent, canActivate: [LeaveGuard] },
      { path: 'line-listing', component: LineListingComponent, canActivate: [LeaveGuard] },
      {
        path: 'document-templates',
        component: DocumentTemplatesComponent,
        canActivate: [LeaveGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationRoutingModule {}
