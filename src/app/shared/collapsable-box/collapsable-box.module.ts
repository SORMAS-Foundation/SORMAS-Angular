import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { CollapsableBoxComponent } from './collapsable-box.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [CollapsableBoxComponent],
  exports: [CollapsableBoxComponent],
})
export class CollapsableBoxModule {}
