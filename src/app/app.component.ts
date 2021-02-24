import { Component, LOCALE_ID, Inject } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';
import { localeOptions } from './shared/locale-select/shared/localeOptions';
import { getEnv } from '../environments/getEnv';

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

    this.crashOnProductionWithLegacyLogin();
  }

  private crashOnProductionWithLegacyLogin(): void {
    const { isLegacyLogin, production } = getEnv();

    if (isLegacyLogin && production) {
      const error = 'Legacy login not supported in production mode. Please use Keycloak for login!';
      document.write(error);
      throw new Error(error);
    }
  }
}
