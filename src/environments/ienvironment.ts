export interface Environment {
  production: boolean;
  keycloakUrl: string;
  keycloakRealm: string;
  keycloakClientId: string;
  apiUrl: string;
  isLegacyLogin: boolean;
}
