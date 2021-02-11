import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { SharedModule } from '../shared/shared.module';
import { FormExampleRoutingModule } from './formExample-routing-module';
import { FormExampleComponent } from './formExample.component';

@NgModule({
  declarations: [FormExampleComponent],
  imports: [CommonModule, FormExampleRoutingModule, SharedModule, DynamicFormModule],
})
export class FormExampleModule {}
