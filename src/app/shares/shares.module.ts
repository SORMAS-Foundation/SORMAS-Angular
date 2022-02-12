import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { MaterialModule } from '../material.module';
import { SharesRoutingModule } from './shares-routing.module';
import { SharesListComponent } from './shares-list/shares-list.component';
import { SharesFiltersComponent } from './shares-filters/shares-filters.component';
import { SharesComponent } from './shares.component';

@NgModule({
  declarations: [SharesComponent, SharesListComponent, SharesFiltersComponent],
  imports: [CommonModule, SharesRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class SharesModule {}
