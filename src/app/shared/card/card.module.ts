import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './card.component';
import { MaterialModule } from '../../material.module';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { CardAddressComponent } from './card-address/card-address.component';
import { CardCaseTaskComponent } from './card-case-task/card-case-task.component';
import { DateCardModule } from '../date-card/date-card.module';
import { CardSampleComponent } from './card-sample/card-sample.component';
import { CardCaseEventComponent } from './card-case-event/card-case-event.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardEpidDataComponent } from './card-epid-data/card-epid-data.component';
import { PipesModule } from '../../_pipes/pipes.module';
import { CardDownloadComponent } from './card-download/card-download.component';
import { CardContactComponent } from './card-contact/card-contact.component';
import { CardPersonCaseComponent } from './card-person-case/card-person-case.component';
import { CardPersonContactComponent } from './card-person-contact/card-person-contact.component';
import { CardPersonEventComponent } from './card-person-event/card-person-event.component';
import { CardEventActionsComponent } from './card-event-actions/card-event-actions.component';
import { CardAttachmentsComponent } from './card-attachments/card-attachments.component';
import { CardTreatmentsComponent } from './card-treatments/card-treatments.component';
import { CardPrescriptionsComponent } from './card-prescriptions/card-prescriptions.component';
import { CardSamplePathogenComponent } from './card-sample-pathogen/card-sample-pathogen.component';
import { CardSampleAdditionalComponent } from './card-list/card-sample-additional/card-sample-additional.component';
import { CardDiseaseComponent } from './card-disease/card-disease.component';
import { CardVaccinationComponent } from './card-vaccination/card-vaccination.component';
import { CardPrevHospitalizationComponent } from './card-prev-hospitalization/card-prev-hospitalization.component';

@NgModule({
  imports: [CommonModule, MaterialModule, DateCardModule, PipesModule, TranslateModule],
  declarations: [
    CardComponent,
    CardActionsComponent,
    CardAddressComponent,
    CardCaseTaskComponent,
    CardCaseEventComponent,
    CardSampleComponent,
    CardListComponent,
    CardEpidDataComponent,
    CardDownloadComponent,
    CardTreatmentsComponent,
    CardPrescriptionsComponent,
    CardContactComponent,
    CardPersonCaseComponent,
    CardPersonContactComponent,
    CardPersonEventComponent,
    CardEventActionsComponent,
    CardAttachmentsComponent,
    CardSamplePathogenComponent,
    CardSampleAdditionalComponent,
    CardDiseaseComponent,
    CardVaccinationComponent,
    CardPrevHospitalizationComponent,
  ],
  exports: [CardComponent, CardListComponent, CardEventActionsComponent, CardAttachmentsComponent],
})
export class CardModule {}
