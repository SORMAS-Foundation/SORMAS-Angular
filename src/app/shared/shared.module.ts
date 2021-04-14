import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { MaterialModule } from '../material.module';
import { LayoutComponent } from './layout/layout.component';
import { LocaleSelectComponent } from './locale-select/locale-select.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TableComponent } from './table/table.component';
import { PropertyGetterPipe } from './pipes/property-getter/property-getter.pipe';
import { MenuComponent } from './layout/menu/menu.component';
import { DialogModule } from './dialog';
import { EnumToKeyValuePipe } from './pipes/enum-to-key-value/enum-to-key-value.pipe';
import { CollapsableBoxComponent } from './collapsable-box/collapsable-box.component';
import { InpageNavComponent } from './inpage-nav/inpage-nav.component';
import { FormActionsComponent } from './form-actions/form-actions.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NotFoundComponent,
    LocaleSelectComponent,
    TableComponent,
    PropertyGetterPipe,
    MenuComponent,
    InpageNavComponent,
    CollapsableBoxComponent,
    EnumToKeyValuePipe,
    FormActionsComponent,
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
  ],
  exports: [
    LayoutComponent,
    NotFoundComponent,
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
  ],
})
export class SharedModule {}
