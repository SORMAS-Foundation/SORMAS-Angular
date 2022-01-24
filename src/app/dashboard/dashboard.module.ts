import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SurveillanceComponent } from './surveillance/surveillance.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardFiltersComponent } from './components/dashboard-filters/dashboard-filters.component';
import { DashboardDiseaseOverviewComponent } from './components/dashboard-disease-overview/dashboard-disease-overview.component';
import { DashboardDifferenceCasesComponent } from './components/dashboard-difference-cases/dashboard-difference-cases.component';
import { DashboardDiseaseMenuComponent } from './components/dashboard-disease-menu/dashboard-disease-menu.component';
import { DashboardNewCasesComponent } from './components/dashboard-new-cases/dashboard-new-cases.component';
import { DashboardNewEventsComponent } from './components/dashboard-new-events/dashboard-new-events.component';
import { DashboardTestResultsComponent } from './components/dashboard-test-results/dashboard-test-results.component';
import { DashboardEpidemiologicalCurveComponent } from './components/dashboard-epidemiological-curve/dashboard-epidemiological-curve.component';
import { DashboardCaseMapComponent } from './components/dashboard-case-map/dashboard-case-map.component';
import { DashboardContactsComponent } from './components/dashboard-contacts/dashboard-contacts.component';
import { DashboardUnderFollowUpComponent } from './components/dashboard-under-follow-up/dashboard-under-follow-up.component';
import { DashboardStoppedFollowUpComponent } from './components/dashboard-stopped-follow-up/dashboard-stopped-follow-up.component';
import { DashboardVisitsComponent } from './components/dashboard-visits/dashboard-visits.component';
import { DashboardContactStatsComponent } from './components/dashboard-contact-stats/dashboard-contact-stats.component';
import { DashboardTransmissionChainComponent } from './components/dashboard-transmission-chain/dashboard-transmission-chain.component';
import { DashboardDiseaseBurdenComponent } from './components/dashboard-disease-burden/dashboard-disease-burden.component';
import { MapLegendComponent } from './components/map-legend/map-legend.component';
import { MapLayersComponent } from './components/map-layers/map-layers.component';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [
    DashboardComponent,
    SurveillanceComponent,
    ContactsComponent,
    DashboardFiltersComponent,
    DashboardDiseaseBurdenComponent,
    DashboardDiseaseOverviewComponent,
    DashboardDifferenceCasesComponent,
    DashboardDiseaseMenuComponent,
    DashboardNewCasesComponent,
    DashboardNewEventsComponent,
    DashboardTestResultsComponent,
    DashboardEpidemiologicalCurveComponent,
    DashboardCaseMapComponent,
    DashboardContactsComponent,
    DashboardUnderFollowUpComponent,
    DashboardStoppedFollowUpComponent,
    DashboardVisitsComponent,
    DashboardContactStatsComponent,
    DashboardTransmissionChainComponent,
    MapLegendComponent,
    MapLayersComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    SharedModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    LeafletModule,
    DynamicFormModule,
  ],
})
export class DashboardModule {}
