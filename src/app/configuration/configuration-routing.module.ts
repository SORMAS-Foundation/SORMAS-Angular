import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
      { path: 'outbreaks', component: OutbreaksComponent },
      { path: 'continents', component: ContinentsComponent },
      { path: 'subcontinents', component: SubcontinentsComponent },
      { path: 'countries', component: CountriesComponent },
      { path: 'regions', component: RegionsComponent },
      { path: 'districts', component: DistrictsComponent },
      { path: 'communities', component: CommunitiesComponent },
      { path: 'facilities', component: FacilitiesComponent },
      { path: 'entry-points', component: EntryPointsComponent },
      { path: 'population', component: PopulationComponent },
      {
        path: 'line-listing',
        children: [
          { path: '', component: LineListingComponent },
          { path: ':regionId', component: LineListingComponent },
        ],
      },
      {
        path: 'document-templates',
        component: DocumentTemplatesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationRoutingModule {}
