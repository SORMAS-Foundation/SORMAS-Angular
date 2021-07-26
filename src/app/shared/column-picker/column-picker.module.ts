import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { ColumnPickerComponent } from './column-picker.component';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';

@NgModule({
  imports: [CommonModule, MaterialModule, DynamicFormModule],
  declarations: [ColumnPickerComponent],
  exports: [ColumnPickerComponent],
})
export class ColumnPickerModule {}
