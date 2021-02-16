import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseRoutingModule } from './case-routing.module';
import { CaseComponent } from './case.component';

@NgModule({
  declarations: [CaseComponent],
  imports: [CommonModule, CaseRoutingModule],
})
export class CaseModule {}
