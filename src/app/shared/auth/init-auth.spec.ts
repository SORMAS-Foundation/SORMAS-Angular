import { initializeAuth } from './init-auth';

describe('initializeAuth', () => {
  it('sets auth type based on env for legacy login', async () => {
    const keycloakServ = jasmine.createSpyObj('KeycloakService', ['init']);
    const authService = jasmine.createSpyObj('authService', ['init']);
    const location = jasmine.createSpyObj('Location', ['getState']);

    const res = await initializeAuth(keycloakServ, authService, location, {
      isLegacyLogin: true,
      apiUrl: '',
      keycloakClientId: '',
      keycloakRealm: '',
      keycloakUrl: '',
      production: true,
    })();

    expect(res).toBe(true);
    expect(keycloakServ.init).not.toHaveBeenCalled();
  });

  it('sets auth type based on env for login with Keycloak', async () => {
    const keycloakServ = jasmine.createSpyObj('KeycloakService', ['init']);
    const authService = jasmine.createSpyObj('authService', ['init']);
    const location = jasmine.createSpyObj('Location', ['getState', 'prepareExternalUrl']);

    keycloakServ.init.and.callFake(() => Promise.resolve(true));

    const res = await initializeAuth(keycloakServ, authService, location, {
      isLegacyLogin: false,
      apiUrl: '',
      keycloakClientId: '',
      keycloakRealm: '',
      keycloakUrl: '',
      production: false,
    })();

    expect(res).toBe(true);
    expect(keycloakServ.init).toHaveBeenCalledTimes(1);
  });
});
