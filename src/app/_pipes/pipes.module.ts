import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumToKeyValuePipe } from './enum-to-key-value/enum-to-key-value.pipe';
import { HumanizePipe } from './humanize/humanize.pipe';
import { ToShortIdPipe } from './toShortId/toShortId.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [EnumToKeyValuePipe, HumanizePipe, ToShortIdPipe],
  exports: [EnumToKeyValuePipe, HumanizePipe, ToShortIdPipe],
})
export class PipesModule {}
