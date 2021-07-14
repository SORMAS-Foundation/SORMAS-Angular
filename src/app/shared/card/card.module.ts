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
    CardContactComponent,
  ],
  exports: [CardComponent, CardListComponent],
})
export class CardModule {}
