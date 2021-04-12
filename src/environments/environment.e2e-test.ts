import { Environment } from './ienvironment';

export const environment: Environment = {
  production: false,
  keycloakUrl: 'https://test-de1.sormas.netzlink.com/keycloak/auth/',
  keycloakRealm: 'SORMAS',
  keycloakClientId: 'sormas-angular',
  apiUrl: 'http://localhost:4201',
  isLegacyLogin: true,
};
