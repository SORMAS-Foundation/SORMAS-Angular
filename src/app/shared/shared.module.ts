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
import { InpageNavModule } from './inpage-nav/inpage-nav.module';
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
import { AddEditBaseModalComponent } from './modals/add-edit-base-modal/add-edit-base-modal.component';
import { ActionMenuComponent } from './action-menu/action-menu.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EdgePanelComponent } from './edge-panel/edge-panel.component';
import { TableDataComponent } from './table/table-data/table-data.component';
import { PersonContactsListComponent } from './widgets/person-contacts-list/person-contacts-list.component';
import { NewPersonContactComponent } from './widgets/new-person-contact/new-person-contact.component';
import { GpsCoordsComponent } from './widgets/gps-coords/gps-coords.component';
import { AddressButtonComponent } from './widgets/address-button/address-button.component';
import { ColumnPickerModule } from './column-picker/column-picker.module';
import { DirectivesModule } from '../_directives/directives.module';
import { LastUpdateComponent } from './widgets/last-update/last-update.component';

@NgModule({
  declarations: [
    LocaleSelectComponent,
    TableComponent,
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
    AddEditBaseModalComponent,
    ActionMenuComponent,
    DropdownMenuComponent,
    SidebarComponent,
    EdgePanelComponent,
    TableDataComponent,
    PersonContactsListComponent,
    NewPersonContactComponent,
    GpsCoordsComponent,
    AddressButtonComponent,
    LastUpdateComponent,
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
    InpageNavModule,
    ColumnPickerModule,
    DirectivesModule,
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
    InpageNavModule,
    CollapsableBoxComponent,
    FormActionsComponent,
    CardModule,
    DateCardModule,
    PipesModule,
    TranslateModule,
    ContactFiltersComponent,
    FiltersComponent,
    ActionMenuComponent,
    DropdownMenuComponent,
    SidebarComponent,
    EdgePanelComponent,
    ColumnPickerModule,
    DirectivesModule,
  ],
  entryComponents: [AddEditBaseModalComponent, TableDataComponent],
})
export class SharedModule {}
