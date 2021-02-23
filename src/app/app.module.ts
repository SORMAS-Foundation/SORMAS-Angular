import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiModule } from 'api-client';
import { BidiModule } from '@angular/cdk/bidi';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeAuth } from './shared/auth/init-auth';
import { ApiInterceptor } from './shared/http/ApiInterceptor';
import { SharedModule } from './shared/shared.module';
import { ENV, getEnv } from '../environments/getEnv';
import { AuthService } from './shared/auth/auth-service/auth.service';
import { DynamicFormModule } from './shared/dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
    ApiModule,
    BidiModule,
    DynamicFormModule,
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
      deps: [AuthService, Location, ENV],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
