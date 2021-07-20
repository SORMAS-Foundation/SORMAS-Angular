import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebounceDirective } from './debounce.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DebounceDirective],
  exports: [DebounceDirective],
})
export class DirectivesModule {}
