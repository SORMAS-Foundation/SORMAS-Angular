import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { CaseRoutingModule } from './case-routing.module';
import { CaseComponent } from './case.component';

@NgModule({
  declarations: [CaseComponent],
  imports: [CommonModule, CaseRoutingModule, MaterialModule],
})
export class CaseModule {}
