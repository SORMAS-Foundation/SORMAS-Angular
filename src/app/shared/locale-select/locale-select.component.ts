import { Component, LOCALE_ID, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { localeOptions } from './shared/localeOptions';

@Component({
  selector: 'app-locale-select',
  templateUrl: './locale-select.component.html',
  styleUrls: ['./locale-select.component.scss'],
})
export class LocaleSelectComponent {
  options = localeOptions;
  myControl = new FormControl();
  selectedLocale = '';

  constructor(@Inject(LOCALE_ID) protected localeId: string) {
    this.selectedLocale = localeId;
  }

  selectLocale(event: { value?: string }): void {
    const newLocale = event?.value ?? '';

    if (window) {
      window.location.assign(`${window.location.origin}/${newLocale}`);
    }
  }
}
