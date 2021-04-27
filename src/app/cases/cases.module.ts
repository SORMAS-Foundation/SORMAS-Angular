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
import { CaseSymptomsComponent } from './case_components/case-symptoms/case-symptoms.component';
import { CaseEpidemiologicalDataComponent } from './case_components/case-epidemiological-data/case-epidemiological-data.component';
import { CaseTherapyComponent } from './case_components/case-therapy/case-therapy.component';
import { CaseFollowUpComponent } from './case_components/case-follow-up/case-follow-up.component';
import { CaseClinicalCourseComponent } from './case_components/case-clinical-course/case-clinical-course.component';
import { CaseContactsComponent } from './case_components/case-contacts/case-contacts.component';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { CaseFiltersComponent } from './case-filters/case-filters.component';
import { NewEpidNumberComponent } from './case_components/new-epid-number/new-epid-number.component';
import { FollowUpStatusComponent } from './case_components/follow-up-status/follow-up-status.component';
import { SymptomsGroupSelectComponent } from './case_components/symptoms-group-select/symptoms-group-select.component';

@NgModule({
  declarations: [
    CasesComponent,
    CasesListComponent,
    CaseComponent,
    CaseDetailsComponent,
    CasePersonComponent,
    CaseHospitalizationComponent,
    CaseSymptomsComponent,
    CaseEpidemiologicalDataComponent,
    CaseTherapyComponent,
    CaseFollowUpComponent,
    CaseClinicalCourseComponent,
    CaseContactsComponent,
    CaseFiltersComponent,
    NewEpidNumberComponent,
    FollowUpStatusComponent,
    SymptomsGroupSelectComponent,
  ],
  imports: [CommonModule, CasesRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class CasesModule {}
