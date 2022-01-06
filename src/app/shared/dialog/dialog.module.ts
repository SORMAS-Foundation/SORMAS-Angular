import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

import { DialogComponent } from './dialog.component';
import { DialogService } from '../../_services/dialog.service';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [DialogComponent],
  exports: [DialogComponent],
  providers: [DialogService],
})
export class DialogModule {}
