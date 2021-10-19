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
import { PopulationComponent } from './population/population.component';
import { LineListingComponent } from './line-listing/line-listing.component';
import { DocumentTemplatesComponent } from './document-templates/document-templates.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryFiltersComponent } from './countries/country-filters/country-filters.component';
import { RegionListComponent } from './regions/region-list/region-list.component';
import { RegionFiltersComponent } from './regions/region-filters/region-filters.component';
import { DistrictListComponent } from './districts/district-list/district-list.component';
import { DistrictFiltersComponent } from './districts/district-filters/district-filters.component';
import { CommunityListComponent } from './communities/community-list/community-list.component';
import { CommunityFiltersComponent } from './communities/community-filters/community-filters.component';
import { CountryAddEditComponent } from './countries/country-add-edit/country-add-edit.component';
import { CommunityAddEditComponent } from './communities/community-add-edit/community-add-edit.component';
import { RegionAddEditComponent } from './regions/region-add-edit/region-add-edit.component';
import { DistrictAddEditComponent } from './districts/district-add-edit/district-add-edit.component';
import { ContinentListComponent } from './continents/continent-list/continent-list.component';
import { ContinentAddEditComponent } from './continents/continent-add-edit/continent-add-edit.component';
import { ContinentFiltersComponent } from './continents/continent-filters/continent-filters.component';
import { EntryPointsComponent } from './entry-points/entry-points.component';
import { EntryPointsFiltersComponent } from './entry-points/entry-points-filters/entry-points-filters.component';
import { EntryPointsListComponent } from './entry-points/entry-points-list/entry-points-list.component';
import { EntryPointsAddEditComponent } from './entry-points/entry-points-add-edit/entry-points-add-edit.component';

@NgModule({
  declarations: [
    ConfigurationComponent,
    OutbreaksComponent,
    ContinentsComponent,
    SubcontinentsComponent,
    CountriesComponent,
    CountryListComponent,
    CountryFiltersComponent,
    RegionsComponent,
    RegionListComponent,
    RegionFiltersComponent,
    DistrictsComponent,
    DistrictListComponent,
    DistrictFiltersComponent,
    CommunitiesComponent,
    CommunityListComponent,
    CommunityFiltersComponent,
    FacilitiesComponent,
    EntryPointsComponent,
    PopulationComponent,
    LineListingComponent,
    DocumentTemplatesComponent,
    CountryAddEditComponent,
    CommunityAddEditComponent,
    RegionAddEditComponent,
    DistrictAddEditComponent,
    ContinentListComponent,
    ContinentAddEditComponent,
    ContinentFiltersComponent,
    EntryPointsComponent,
    EntryPointsFiltersComponent,
    EntryPointsListComponent,
    EntryPointsAddEditComponent,
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
