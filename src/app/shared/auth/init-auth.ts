import { Location } from '@angular/common';
import { KeycloakService } from 'keycloak-angular';
import { environment } from '../../../environments/environment';

export function initializeAuth(
  keycloak: KeycloakService,
  locationStrategy: Location
): () => Promise<boolean> {
  return () => {
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
