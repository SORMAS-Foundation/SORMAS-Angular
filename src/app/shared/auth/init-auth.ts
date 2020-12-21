import { KeycloakService } from 'keycloak-angular';

export function initializeAuth(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:5001/auth',
        realm: 'Sormas',
        clientId: 'sormas-angular',
      },
      initOptions: {
        checkLoginIframe: true,
        checkLoginIframeInterval: 25,
      },
      loadUserProfileAtStartUp: true,
    });
}
