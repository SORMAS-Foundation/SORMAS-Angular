import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { CollapsableBoxComponent } from './collapsable-box.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [CollapsableBoxComponent],
  exports: [CollapsableBoxComponent],
})
export class CollapsableBoxModule {}
