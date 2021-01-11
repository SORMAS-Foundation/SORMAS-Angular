import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LocaleSelectComponent } from './locale-select/locale-select.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [LayoutComponent, NotFoundComponent, LocaleSelectComponent],
  imports: [CommonModule, RouterModule, MaterialModule, FontAwesomeModule],
  exports: [
    LayoutComponent,
    NotFoundComponent,
    LocaleSelectComponent,
    MaterialModule,
    FontAwesomeModule,
  ],
})
export class SharedModule {
  constructor(private faIconLibrary: FaIconLibrary) {
    this.faIconLibrary.addIcons(faBars);
  }
}
