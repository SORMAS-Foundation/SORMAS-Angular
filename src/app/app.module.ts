import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { BidiModule } from '@angular/cdk/bidi';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { initializeAuth } from './shared/auth/init-auth';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
    BidiModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAuth,
      multi: true,
      deps: [KeycloakService, Location],
    },
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
