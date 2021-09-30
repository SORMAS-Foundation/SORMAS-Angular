import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebounceDirective } from './debounce.directive';
import { FluidHeightDirective } from './fluid-height.directive';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DebounceDirective, FluidHeightDirective, TooltipDirective],
  exports: [DebounceDirective, FluidHeightDirective, TooltipDirective],
})
export class DirectivesModule {}
