import { Location } from '@angular/common';
import { Environment } from '../../../environments/ienvironment';
import { AuthService } from './auth-service/auth.service';
import { HttpClient} from '@angular/common/http';

export function initializeAuth(
  authService: AuthService,
  locationStrategy: Location,
  http: HttpClient,
  environment: Environment
): () => Promise<boolean> {
  return () => {
    if (environment.isLegacyLogin) {
      return authService.init({});
    }

    return new Promise((resolve, reject) => {
      http
        .get('/sormas-angular/assets/environment.json')
        .toPromise()
        .then((result: any) => {
          return resolve(
            authService.init({
              config: {
                url: result.keycloakUrl,
                realm: result.keycloakRealm,
                clientId: result.keycloakClientId,
              },
              initOptions: {
                enableLogging: !environment.production,
                onLoad: 'check-sso',
                silentCheckSsoRedirectUri: `${
                  window.location.origin
                }${locationStrategy.prepareExternalUrl('/assets/silent-check-sso.html')}`,
              },
              loadUserProfileAtStartUp: true,
            })
          );
        })
        .catch((error) => {
          reject(error);
        });
    });

    return authService.init({
      config: {
        url: environment.keycloakUrl,
        realm: environment.keycloakRealm,
        clientId: environment.keycloakClientId,
      },
      initOptions: {
        enableLogging: !environment.production,
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: `${window.location.origin}${locationStrategy.prepareExternalUrl(
          '/assets/silent-check-sso.html'
        )}`,
      },
      loadUserProfileAtStartUp: true,
    });
  };
}
