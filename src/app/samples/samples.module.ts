import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplesComponent } from './samples.component';
import { SampleFilterComponent } from './sample-filter/sample-filter.component';
import { SamplesListComponent } from './samples-list/samples-list.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { SamplesRoutingModule } from './samples-routing.module';

@NgModule({
  declarations: [SamplesComponent, SampleFilterComponent, SamplesListComponent],
  imports: [CommonModule, SamplesRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class SamplesModule {}
