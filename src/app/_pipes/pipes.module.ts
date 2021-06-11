import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumToKeyValuePipe } from './enum-to-key-value/enum-to-key-value.pipe';
import { HumanizePipe } from './humanize/humanize.pipe';
import { ToShortIdPipe } from './toShortId/toShortId.pipe';
import { CustomDatePipe } from './custom-date/custom-date.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [EnumToKeyValuePipe, HumanizePipe, ToShortIdPipe, CustomDatePipe],
  exports: [EnumToKeyValuePipe, HumanizePipe, ToShortIdPipe, CustomDatePipe],
})
export class PipesModule {}
