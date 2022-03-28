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
import { CasePortHealthComponent } from './case_components/case-port-health/case-port-health.component';
import { CaseEditComponent } from './case-edit/case-edit.component';
import { CustomCaseExportComponent } from './custom-case-export/custom-case-export.component';
import { CaseImportComponent } from './case-import/case-import.component';
import { TherapyFiltersComponent } from './case_components/therapy-filters/therapy-filters.component';
import { BasicCaseExportComponent } from './basic-case-export/basic-case-export.component';

@NgModule({
  declarations: [
    CasesComponent,
    CasesListComponent,
    CaseComponent,
    CaseDetailsComponent,
    CasePersonComponent,
    CaseHospitalizationComponent,
    CasePortHealthComponent,
    CaseSymptomsComponent,
    CaseEpidemiologicalDataComponent,
    CaseTherapyComponent,
    CaseFollowUpComponent,
    CaseClinicalCourseComponent,
    CaseContactsComponent,
    CaseFiltersComponent,
    CustomCaseExportComponent,
    CaseImportComponent,
    CaseEditComponent,
    TherapyFiltersComponent,
    BasicCaseExportComponent,
  ],
  imports: [CommonModule, CasesRoutingModule, MaterialModule, SharedModule, DynamicFormModule],
})
export class CasesModule {}
