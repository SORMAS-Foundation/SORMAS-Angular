import { Environment } from './ienvironment';

export const environment: Environment = {
  production: true,
  keycloakUrl: 'https://sormas-docker-test.com/keycloak/auth/',
  keycloakRealm: 'SORMAS',
  keycloakClientId: 'sormas-angular',
  apiUrl: 'https://sormas-docker-test.com',
  isLegacyLogin: false,
};
