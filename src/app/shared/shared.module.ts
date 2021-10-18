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
import { InfoBarComponent } from './info-bar/info-bar.component';
import { SuperordinateEventComponent } from './widgets/superordinate-event/superordinate-event.component';
import { ContactCaseDetailsComponent } from './widgets/contact-case-details/contact-case-details.component';
import { ContactFollowUpComponent } from './widgets/contact-follow-up/contact-follow-up.component';
import { TableNotificationComponent } from './table/table-notification/table-notification.component';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { ExportsGroupSelectComponent } from './widgets/exports-group-select/exports-group-select.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ChooseCaseModalComponent } from './modals/choose-case-modal/choose-case-modal.component';
import { LoaderComponent } from './loader/loader.component';
import { CollapsableBoxModule } from './collapsable-box/collapsable-box.module';
import { ContactFiltersModule } from './contact-filters/contact-filters.module';
import { CaseAddComponent } from './case-add/case-add.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { FiltersModule } from './filters/filters.module';

@NgModule({
  declarations: [
    LocaleSelectComponent,
    TableComponent,
    FormActionsComponent,
    NewEpidNumberComponent,
    FollowUpStatusComponent,
    ExposuresListComponent,
    ActivitiesListComponent,
    SymptomsGroupSelectComponent,
    AddressesListComponent,
    NewAddressComponent,
    AddEditBaseModalComponent,
    ActionMenuComponent,
    DropdownMenuComponent,
    SidebarComponent,
    EdgePanelComponent,
    TableDataComponent,
    TableNotificationComponent,
    PersonContactsListComponent,
    NewPersonContactComponent,
    GpsCoordsComponent,
    AddressButtonComponent,
    LastUpdateComponent,
    InfoBarComponent,
    SuperordinateEventComponent,
    SelectionListComponent,
    TooltipComponent,
    ContactCaseDetailsComponent,
    ContactFollowUpComponent,
    ExportsGroupSelectComponent,
    ChooseCaseModalComponent,
    LoaderComponent,
    CaseAddComponent,
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
    CollapsableBoxModule,
    DynamicFormModule,
    ContactFiltersModule,
    FiltersModule,
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
    FormActionsComponent,
    CardModule,
    DateCardModule,
    PipesModule,
    TranslateModule,
    ActionMenuComponent,
    DropdownMenuComponent,
    SidebarComponent,
    EdgePanelComponent,
    ColumnPickerModule,
    DirectivesModule,
    InfoBarComponent,
    SelectionListComponent,
    LoaderComponent,
    CollapsableBoxModule,
    CaseAddComponent,
    ContactFiltersModule,
    FiltersModule,
  ],
  entryComponents: [AddEditBaseModalComponent, TableDataComponent, TableNotificationComponent],
})
export class SharedModule {}
