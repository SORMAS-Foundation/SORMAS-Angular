import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { DynamicFormGroupComponent } from './dynamic-form/dynamic-form-group.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { LayoutComponent } from './layout/layout.component';
import { LocaleSelectComponent } from './locale-select/locale-select.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NotFoundComponent,
    DynamicFormComponent,
    DynamicFormGroupComponent,
    LocaleSelectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [
    LayoutComponent,
    NotFoundComponent,
    DynamicFormComponent,
    DynamicFormGroupComponent,
    LocaleSelectComponent,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
