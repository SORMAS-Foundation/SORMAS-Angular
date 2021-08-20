import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { MaterialModule } from '../material.module';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { OutbreaksComponent } from './outbreaks/outbreaks.component';
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

@NgModule({
  declarations: [
    ConfigurationComponent,
    OutbreaksComponent,
    ContinentsComponent,
    SubcontinentsComponent,
    CountriesComponent,
    RegionsComponent,
    DistrictsComponent,
    CommunitiesComponent,
    FacilitiesComponent,
    EntryPointsComponent,
    PopulationComponent,
    LineListingComponent,
    DocumentTemplatesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    DynamicFormModule,
    ConfigurationRoutingModule,
  ],
})
export class ConfigurationModule {}
