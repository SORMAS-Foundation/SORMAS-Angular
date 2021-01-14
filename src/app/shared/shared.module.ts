import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DynamicFormQuestionComponent } from '../dynamic-form-question.component';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [LayoutComponent, NotFoundComponent, DynamicFormComponent, DynamicFormQuestionComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [LayoutComponent, NotFoundComponent, DynamicFormComponent, DynamicFormQuestionComponent],
})
export class SharedModule {}
