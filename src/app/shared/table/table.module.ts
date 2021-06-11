import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { PipesModule } from '../../_pipes/pipes.module';

import { TableComponent } from './table.component';
import { CellDataComponent } from './cell-data/cell-data.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TableVirtualScrollModule,
    TranslateModule,
    RouterModule,
    PipesModule,
  ],
  declarations: [TableComponent, CellDataComponent],
  exports: [TableComponent],
})
export class TableModule {}
