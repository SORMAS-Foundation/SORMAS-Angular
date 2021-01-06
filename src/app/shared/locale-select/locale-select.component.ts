import { Component } from '@angular/core';

@Component({
  selector: 'app-locale-select',
  templateUrl: './locale-select.component.html',
  styleUrls: ['./locale-select.component.scss'],
})
export class LocaleSelectComponent {
  selectLanguage(event: Event): void {
    const newLocale = (event.target as HTMLInputElement)?.value ?? '';

    if (window) {
      window.location.assign(`${window.location.origin}/${newLocale}`);
    }
  }
}
