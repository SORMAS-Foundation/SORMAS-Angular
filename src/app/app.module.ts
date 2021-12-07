import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { BidiModule } from '@angular/cdk/bidi';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DateFnsModule } from 'ngx-date-fns';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeAuth } from './shared/auth/init-auth';
import { SharedModule } from './shared/shared.module';
import { ENV, getEnv } from '../environments/getEnv';
import { AuthService } from './shared/auth/auth-service/auth.service';
import { DynamicFormModule } from './shared/dynamic-form/dynamic-form.module';
import { MenuComponent } from './_common-components/menu/menu.component';
import { ApiInterceptor } from './_interceptors/ApiInterceptor';
import { NotFoundComponent } from './_common-components/not-found/not-found.component';
import { HelperService } from './_services/helper.service';

export function HttpLoaderFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/');
}

@NgModule({
  declarations: [AppComponent, MenuComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
    BidiModule,
    DynamicFormModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    DateFnsModule.forRoot(),
  ],
  providers: [
    { provide: ENV, useFactory: getEnv },
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: AuthService, useClass: getEnv().isLegacyLogin ? AuthService : KeycloakService },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAuth,
      multi: true,
      deps: [AuthService, Location, HttpClient, HelperService, ENV],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
