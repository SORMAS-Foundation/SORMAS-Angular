import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DynamicFormGroupComponent } from './dynamic-form/dynamic-form-group.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [LayoutComponent, NotFoundComponent, DynamicFormComponent, DynamicFormGroupComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [LayoutComponent, NotFoundComponent, DynamicFormComponent, DynamicFormGroupComponent],
})
export class SharedModule {}
