import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplesComponent } from './samples.component';
import { SamplesListComponent } from './samples-list/samples-list.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { SamplesRoutingModule } from './samples-routing.module';
import { SampleFiltersComponent } from './sample-filters/sample-filters.component';
import { SampleAddComponent } from './sample-add/sample-add.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    SamplesComponent,
    SamplesListComponent,
    SampleFiltersComponent,
    SampleAddComponent,
    SampleComponent,
  ],
  imports: [CommonModule, SamplesRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class SamplesModule {}
