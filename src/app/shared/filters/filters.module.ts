import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { MaterialModule } from '../../material.module';
import { FiltersComponent } from './filters/filters.component';
import { FiltersFormComponent } from './filters-form/filters-form.component';
import { DirectivesModule } from '../../_directives/directives.module';

@NgModule({
  imports: [CommonModule, DynamicFormModule, MaterialModule, TranslateModule, DirectivesModule],
  declarations: [FiltersComponent, FiltersFormComponent],
  exports: [FiltersComponent, FiltersFormComponent],
})
export class FiltersModule {}
