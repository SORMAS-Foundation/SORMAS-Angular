import { Location } from '@angular/common';
import { Environment } from '../../../environments/ienvironment';
import { AuthService } from './auth-service/auth.service';

export function initializeAuth(
  authService: AuthService,
  locationStrategy: Location,
  environment: Environment
): () => Promise<boolean> {
  return () => {
    if (environment.isLegacyLogin) {
      return authService.init({});
    }

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
