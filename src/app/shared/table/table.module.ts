import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../material.module';
import { TableDataComponent } from './table-data/table-data.component';
import { TableComponent } from './table.component';

@NgModule({
  imports: [CommonModule, MaterialModule, TableVirtualScrollModule, TranslateModule],
  declarations: [TableDataComponent, TableComponent],
  exports: [TableComponent],
})
export class TableModule {}
