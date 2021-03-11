import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesComponent } from './cases.component';
import { CasesListComponent } from './cases-list/cases-list.component';
import { CaseComponent } from './case/case.component';
import { CasesRoutingModule } from './cases-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { CaseDetailsComponent } from './case_components/case-details/case-details.component';
import { CasePersonComponent } from './case_components/case-person/case-person.component';
import { CaseHospitalizationComponent } from './case_components/case-hospitalization/case-hospitalization.component';

@NgModule({
  declarations: [
    CasesComponent,
    CasesListComponent,
    CaseComponent,
    CaseDetailsComponent,
    CasePersonComponent,
    CaseHospitalizationComponent
  ],
  imports: [CommonModule, CasesRoutingModule, MaterialModule, SharedModule],
})
export class CasesModule {}
