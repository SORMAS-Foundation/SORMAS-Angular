import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private subject = new Subject<any>();

  get currentLocale(): string {
    return this.translateService.currentLang;
  }

  constructor(private translateService: TranslateService) {}

  initLocale(locales: string[], defaultLocaleId: string): void {
    this.setLocales(locales);
    this.setDefaultLocale(defaultLocaleId);
    this.setLocale(defaultLocaleId);
  }

  setLocales(locales: string[]): void {
    this.translateService.addLangs(locales);
  }

  setDefaultLocale(localeId: string): void {
    this.translateService.setDefaultLang(localeId);
  }

  setLocale(localeId: string): void {
    this.translateService.use(localeId);
    this.subject.next(localeId);
  }

  getLocale(): Observable<any> {
    return this.subject.asObservable();
  }
}
