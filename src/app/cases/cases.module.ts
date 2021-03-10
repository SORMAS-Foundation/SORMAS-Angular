import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesComponent } from './cases.component';
import { CasesListComponent } from './cases-list/cases-list.component';
import { CaseComponent } from './case/case.component';
import { CasesRoutingModule } from './cases-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [CasesComponent, CasesListComponent, CaseComponent],
  imports: [CommonModule, CasesRoutingModule, SharedModule, MaterialModule],
})
export class CasesModule {}
