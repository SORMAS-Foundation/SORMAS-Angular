import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdsPlaygroundRoutingModule } from './pds-playground-routing.module';
import { PdsPlaygroundComponent } from './pds-playground.component';

@NgModule({
  declarations: [PdsPlaygroundComponent],
  imports: [CommonModule, PdsPlaygroundRoutingModule],
})
export class PdsPlaygroundModule {}
