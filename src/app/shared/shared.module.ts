import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';
import { LocaleSelectComponent } from './locale-select/locale-select.component';
import { TableComponent } from './table/table.component';
import { DialogModule } from './dialog';
import { CollapsableBoxComponent } from './collapsable-box/collapsable-box.component';
import { InpageNavComponent } from './inpage-nav/inpage-nav.component';
import { FormActionsComponent } from './form-actions/form-actions.component';
import { CardModule } from './card/card.module';
import { DateCardModule } from './date-card/date-card.module';
import { PipesModule } from '../_pipes/pipes.module';
import { NewEpidNumberComponent } from './widgets/new-epid-number/new-epid-number.component';
import { FollowUpStatusComponent } from './widgets/follow-up-status/follow-up-status.component';
import { ExposuresListComponent } from './widgets/exposures-list/exposures-list.component';
import { ActivitiesListComponent } from './widgets/activities-list/activities-list.component';
import { SymptomsGroupSelectComponent } from './widgets/symptoms-group-select/symptoms-group-select.component';
import { AddressesListComponent } from './widgets/addresses-list/addresses-list.component';
import { NewAddressComponent } from './widgets/new-address/new-address.component';
import { ContactFiltersComponent } from './contact-filters/contact-filters.component';
import { FiltersComponent } from './filters/filters.component';
import { DebounceDirective } from '../_directives/debounce.directive';
import { AddBaseModalComponent } from './modals/add-base-modal/add-base-modal.component';

@NgModule({
  declarations: [
    LocaleSelectComponent,
    TableComponent,
    InpageNavComponent,
    CollapsableBoxComponent,
    FormActionsComponent,
    NewEpidNumberComponent,
    FollowUpStatusComponent,
    ExposuresListComponent,
    ActivitiesListComponent,
    SymptomsGroupSelectComponent,
    AddressesListComponent,
    NewAddressComponent,
    ContactFiltersComponent,
    FiltersComponent,
    DebounceDirective,
    AddBaseModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    TableVirtualScrollModule,
    DialogModule,
    CardModule,
    DateCardModule,
    PipesModule,
    TranslateModule,
  ],
  exports: [
    LocaleSelectComponent,
    TableComponent,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    InpageNavComponent,
    CollapsableBoxComponent,
    FormActionsComponent,
    CardModule,
    DateCardModule,
    PipesModule,
    TranslateModule,
    ContactFiltersComponent,
    FiltersComponent,
    DebounceDirective,
  ],
  entryComponents: [AddBaseModalComponent],
})
export class SharedModule {}
