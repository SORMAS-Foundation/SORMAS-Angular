import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MaterialModule } from '../../material.module';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { CardAddressComponent } from './card-address/card-address.component';
import { CardCaseTaskComponent } from './card-case-task/card-case-task.component';
import { DateCardModule } from '../date-card/date-card.module';
import { CardSampleComponent } from './card-sample/card-sample.component';
import { HumanizePipe } from '../../_pipes/humanize/humanize.pipe';
import { CardCaseEventComponent } from './card-case-event/card-case-event.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  imports: [CommonModule, MaterialModule, DateCardModule],
  declarations: [
    HumanizePipe,
    CardComponent,
    CardActionsComponent,
    CardAddressComponent,
    CardCaseTaskComponent,
    CardCaseEventComponent,
    CardSampleComponent,
    CardListComponent,
  ],
  exports: [CardComponent, CardListComponent],
})
export class CardModule {}
