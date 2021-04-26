import { Location } from '@angular/common';
import { Environment } from '../../../environments/ienvironment';
import { AuthService } from './auth-service/auth.service';
import {EnvironmentService} from '../../_services/api/environment.service';
import {HttpClient} from '@angular/common/http';

export function initializeAuth(
  authService: AuthService,
  environmentService: EnvironmentService,
  http: HttpClient,
  locationStrategy: Location,
  environment: Environment
): () => Promise<boolean> {
  return () => {
    if (environment.isLegacyLogin) {
      return authService.init({});
    }

    // return new Promise(async (resolve, reject) => {
    //   try {
    //     await authService.init({
    //       config: {
    //         url: environment.keycloakUrl,
    //         realm: environment.keycloakRealm,
    //         clientId: environment.keycloakClientId,
    //       },
    //       initOptions: {
    //         enableLogging: !environment.production,
    //         onLoad: 'check-sso',
    //         silentCheckSsoRedirectUri: `${window.location.origin}${locationStrategy.prepareExternalUrl(
    //           '/assets/silent-check-sso.html'
    //         )}`,
    //       },
    //       loadUserProfileAtStartUp: true,
    //     });
    //     resolve();
    //   } catch (error) {
    //     reject(error);
    //   }
    // });

    // return new Promise((resolve, reject) => {
    //   http.get('http://localhost:4200/assets/environment.json').toPromise()
    //     .then((result: any) => {
    //       console.log(result);
    //       return resolve(authService.init({
    //         config: {
    //           url: environment.keycloakUrl,
    //           realm: environment.keycloakRealm,
    //           clientId: environment.keycloakClientId,
    //         },
    //         initOptions: {
    //           enableLogging: !environment.production,
    //           onLoad: 'check-sso',
    //           silentCheckSsoRedirectUri: `${window.location.origin}${locationStrategy.prepareExternalUrl(
    //             '/assets/silent-check-sso.html'
    //           )}`,
    //         },
    //         loadUserProfileAtStartUp: true,
    //       }));
    //     }).catch(error => {
    //       console.log('errrrrorrrrrrrrrrrrrrrrr', error);
    //   })
    // });

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
