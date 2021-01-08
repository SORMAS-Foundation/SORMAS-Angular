import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LocaleSelectComponent } from './locale-select/locale-select.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [LayoutComponent, NotFoundComponent, LocaleSelectComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [LayoutComponent, NotFoundComponent, LocaleSelectComponent, MaterialModule],
})
export class SharedModule {}
