import { Location } from '@angular/common';
import { KeycloakService } from 'keycloak-angular';
import { Environment } from '../../../environments/ienvironment';
import { AuthServiceService } from './auth-service/auth-service.service';
// import { environment } from '../../../environments/environment';

export function initializeAuth(
  keycloak: KeycloakService,
  authService: AuthServiceService,
  locationStrategy: Location,
  environment: Environment
): () => Promise<boolean> {
  return () => {
    if (environment.isLegacyLogin) {
      return authService.init({});
    }

    return keycloak.init({
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
