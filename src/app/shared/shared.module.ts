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
import { AddEditBaseModalComponent } from './modals/add-edit-base-modal/add-edit-base-modal.component';
import { ActionMenuComponent } from './action-menu/action-menu.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EdgePanelComponent } from './edge-panel/edge-panel.component';
import { TableDataComponent } from './table/table-data/table-data.component';
import { PersonContactsListComponent } from './widgets/person-contacts-list/person-contacts-list.component';
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
import { AddressAddEditComponent } from './address-add-edit/address-add-edit.component';
import { ContactAddEditComponent } from './contact-add-edit/contact-add-edit.component';
import { EntityActionsComponent } from './entity-actions/entity-actions.component';
import { TableStaticComponent } from './table-static/table-static.component';
import { ToggleViewComponent } from './toggle-view/toggle-view.component';
import { MsersDiseasesComponent } from './widgets/msers-diseases/msers-diseases.component';
import { PickPersonModalComponent } from './modals/pick-person-modal/pick-person-modal.component';
import { ImmunizationRecoveryComponent } from './widgets/immunization-recovery/immunization-recovery.component';
import { SearchCaseModalComponent } from './modals/search-case-modal/search-case-modal.component';
import { AddCaseLabelComponent } from './widgets/add-case-label/add-case-label.component';
import { LegendComponent } from './legend/legend.component';
import { PeriodPickerComponent } from './period-picker/period-picker.component';
import { TableActionsComponent } from './table/table-actions/table-actions.component';
import { CasePersonContactsListComponent } from './widgets/case-person-contacts-list/case-person-contacts-list.component';
import { CasePersonContactAddEditComponent } from './case-person-contact-add-edit/case-person-contact-add-edit.component';

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
    AddEditBaseModalComponent,
    ActionMenuComponent,
    DropdownMenuComponent,
    SidebarComponent,
    EdgePanelComponent,
    TableActionsComponent,
    TableDataComponent,
    TableNotificationComponent,
    PersonContactsListComponent,
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
    AddressAddEditComponent,
    ContactAddEditComponent,
    EntityActionsComponent,
    TableStaticComponent,
    ToggleViewComponent,
    MsersDiseasesComponent,
    PickPersonModalComponent,
    ImmunizationRecoveryComponent,
    SearchCaseModalComponent,
    AddCaseLabelComponent,
    LegendComponent,
    PeriodPickerComponent,
    CasePersonContactsListComponent,
    CasePersonContactAddEditComponent,
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
    EntityActionsComponent,
    TableStaticComponent,
    ToggleViewComponent,
    LegendComponent,
    PeriodPickerComponent,
  ],
})
export class SharedModule {}
