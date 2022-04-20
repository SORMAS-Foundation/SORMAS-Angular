import { Component, LOCALE_ID, Inject, OnInit, OnDestroy } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { getEnv } from '../environments/getEnv';
import { CONFIG_LOCALE, localeOptions } from './app.constants';
import { LocaleService } from './_services/local.service';
import { LocalStorageService } from './_services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  defaultLanguage = 'en';
  direction: Direction = 'ltr';
  subscription: Subscription = new Subscription();

  constructor(
    @Inject(LOCALE_ID) protected localeId: string,
    public translateService: TranslateService,
    public localeService: LocaleService,
    private localStorage: LocalStorageService
  ) {
    this.crashOnProductionWithLegacyLogin();
  }

  ngOnInit(): void {
    const languages = localeOptions.map((lang) => lang.locale);
    const language = this.localStorage.get(CONFIG_LOCALE) || this.defaultLanguage;

    this.subscription.add(
      this.localeService.getLocale().subscribe((locale: string) => {
        this.saveLocale(locale);
        this.setDirection(locale);
      })
    );

    this.localeService.initLocale(languages, language);
  }

  private crashOnProductionWithLegacyLogin(): void {
    const { isLegacyLogin, production } = getEnv();

    if (isLegacyLogin && production) {
      const error = 'Legacy login not supported in production mode. Please use Keycloak for login!';
      document.write(error);
      throw new Error(error);
    }
  }

  setDirection(locale: string): void {
    const language = localeOptions.find((item) => item.locale === locale);
    this.direction = language?.dir ?? 'ltr';
  }

  saveLocale(locale: string): void {
    this.localStorage.set(CONFIG_LOCALE, locale);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
