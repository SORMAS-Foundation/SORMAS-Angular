import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebounceDirective } from './debounce.directive';
import { FluidHeightDirective } from './fluid-height.directive';
import { TooltipDirective } from './tooltip.directive';
import { MatchHeightDirective } from './match-height.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DebounceDirective, FluidHeightDirective, TooltipDirective, MatchHeightDirective],
  exports: [DebounceDirective, FluidHeightDirective, TooltipDirective, MatchHeightDirective],
})
export class DirectivesModule {}
