// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from './ienvironment';

export const environment: Environment = {
  production: false,
  keycloakRealm: 'SORMAS',
  keycloakClientId: 'sormas-angular',
  isLegacyLogin: false,

  // keycloakUrl: 'https://sormas-docker-test.com/keycloak/auth/',
  // apiUrl: 'https://sormas-docker-test.com/sormas-rest',

  keycloakUrl: 'https://test-de1.sormas.netzlink.com/keycloak/auth/',
  apiUrl: 'http://localhost:4201',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
