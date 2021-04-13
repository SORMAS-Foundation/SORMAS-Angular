import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MaterialModule } from '../../material.module';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { CardAddressComponent } from './card-address/card-address.component';
import { CardCaseTaskComponent } from './card-case-task/card-case-task.component';
import { DateCardModule } from '../date-card/date-card.module';
import { CardSampleComponent } from './card-sample/card-sample.component';

@NgModule({
  imports: [CommonModule, MaterialModule, DateCardModule],
  declarations: [
    CardComponent,
    CardActionsComponent,
    CardAddressComponent,
    CardCaseTaskComponent,
    CardSampleComponent,
  ],
  exports: [CardComponent],
})
export class CardModule {}
