import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumToKeyValuePipe } from './enum-to-key-value/enum-to-key-value.pipe';
import { HumanizePipe } from './humanize/humanize.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [EnumToKeyValuePipe, HumanizePipe],
  exports: [EnumToKeyValuePipe, HumanizePipe],
})
export class PipesModule {}
