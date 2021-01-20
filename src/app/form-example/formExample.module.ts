import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormExampleRoutingModule } from './formExample-routing-module';
import { FormExampleComponent } from './formExample.component';

@NgModule({
  declarations: [FormExampleComponent],
  imports: [CommonModule, FormExampleRoutingModule, SharedModule],
})
export class FormExampleModule {}
