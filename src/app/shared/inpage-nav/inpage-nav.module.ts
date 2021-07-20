import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { InpageNavComponent } from './inpage-nav.component';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule],
  declarations: [InpageNavComponent],
  exports: [InpageNavComponent],
})
export class InpageNavModule {}
