import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { MergeDuplicatesRoutingModule } from './merge-duplicates-routing.module';
import { MergeDuplicatesComponent } from './merge-duplicates.component';
import { MergeDuplicateFiltersComponent } from './merge-duplicate-filters/merge-duplicate-filters.component';
import { MergeDuplicatesListComponent } from './merge-duplicates-list/merge-duplicates-list.component';
import { MergeDuplicatesTableComponent } from './merge-duplicates-table/merge-duplicates-table.component';
import { MergeDuplicatesCaseGuideComponent } from './merge-duplicates-case-guide/merge-duplicates-case-guide.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    MergeDuplicatesComponent,
    MergeDuplicateFiltersComponent,
    MergeDuplicatesListComponent,
    MergeDuplicatesTableComponent,
    MergeDuplicatesCaseGuideComponent
  ],
  imports: [
    CommonModule,
    MergeDuplicatesRoutingModule,
    MaterialModule,
    SharedModule,
    DynamicFormModule,
    InfiniteScrollModule
  ],
})
export class MergeDuplicatesModule {}
