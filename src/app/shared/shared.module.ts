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
import { Table2Component } from './table2/table2.component';
import { NotificationModalComponent } from './notification-modal/notification-modal.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NotFoundComponent,
    LocaleSelectComponent,
    TableComponent,
    PropertyGetterPipe,
    MenuComponent,
    Table2Component,
    NotificationModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    TableVirtualScrollModule,
  ],
  exports: [
    LayoutComponent,
    NotFoundComponent,
    LocaleSelectComponent,
    TableComponent,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Table2Component,
    NotificationModalComponent,
  ],
})
export class SharedModule {}
