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
import { MergeDuplicatesCautionComponent } from './merge-duplicates-caution/merge-duplicates-caution.component';

@NgModule({
  declarations: [
    MergeDuplicatesComponent,
    MergeDuplicateFiltersComponent,
    MergeDuplicatesListComponent,
    MergeDuplicatesTableComponent,
    MergeDuplicatesCaseGuideComponent,
    MergeDuplicatesCautionComponent,
  ],
  imports: [
    CommonModule,
    MergeDuplicatesRoutingModule,
    MaterialModule,
    SharedModule,
    DynamicFormModule,
  ],
})
export class MergeDuplicatesModule {}
