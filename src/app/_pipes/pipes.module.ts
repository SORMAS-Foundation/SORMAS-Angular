import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumToKeyValuePipe } from './enum-to-key-value/enum-to-key-value.pipe';
import { HumanizePipe } from './humanize/humanize.pipe';
import { ToShortIdPipe } from './toShortId/toShortId.pipe';
import { WrapWordPipe } from './wrap-word/wrap-word.pipe';
import { ReplacePipe } from './replace/replace.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [EnumToKeyValuePipe, HumanizePipe, ToShortIdPipe, WrapWordPipe, ReplacePipe],
  exports: [EnumToKeyValuePipe, HumanizePipe, ToShortIdPipe, WrapWordPipe, ReplacePipe],
})
export class PipesModule {}
