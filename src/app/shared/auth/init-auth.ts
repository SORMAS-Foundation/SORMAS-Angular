import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../../../environments/ienvironment';
import { AuthService } from './auth-service/auth.service';
import { HelperService } from '../../_services/helper.service';

export function initializeAuth(
  authService: AuthService,
  locationStrategy: Location,
  http: HttpClient,
  helperService: HelperService,
  environment: Environment
): () => Promise<boolean> {
  return () => {
    if (environment.isLegacyLogin) {
      return authService.init({});
    }

    return new Promise((resolve, reject) => {
      http
        .get('assets/environment.json')
        .toPromise()
        .then((result: any) => {
          helperService.setApiUrl(result.apiUrl);
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
  };
}
