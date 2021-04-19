import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { DateCardComponent } from './date-card.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [DateCardComponent],
  exports: [DateCardComponent],
})
export class DateCardModule {}
