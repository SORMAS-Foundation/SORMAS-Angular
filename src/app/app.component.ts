import { Component, LOCALE_ID, Inject, OnInit, OnDestroy } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { getEnv } from '../environments/getEnv';
import { localeOptions } from './app.constants';
import { LocaleService } from './_services/local.service';

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
    public localeService: LocaleService
  ) {
    this.crashOnProductionWithLegacyLogin();
  }

  ngOnInit(): void {
    const languages = localeOptions.map((lang) => lang.locale);

    this.subscription.add(
      this.localeService.getLocale().subscribe((locale: string) => this.setDirection(locale))
    );

    this.localeService.initLocale(languages, this.defaultLanguage);
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
