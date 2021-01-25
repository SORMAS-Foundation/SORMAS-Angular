import { Component, LOCALE_ID, Inject } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';
import { localeOptions } from './shared/locale-select/shared/localeOptions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  direction: Direction = 'ltr';

  constructor(@Inject(LOCALE_ID) protected localeId: string) {
    const language = localeOptions.find(({ locale }) => locale === localeId);
    if (language) {
      this.direction = language.dir;
    }
  }
}
