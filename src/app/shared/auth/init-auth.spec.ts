import { initializeAuth } from './init-auth';

describe('initializeAuth', () => {
  it('sets auth type based on env for legacy login', async () => {
    const authService = jasmine.createSpyObj('authService', ['init']);
    authService.init.and.callFake(() => Promise.resolve(true));
    const location = jasmine.createSpyObj('Location', ['getState']);

    const res = await initializeAuth(authService, location, {
      isLegacyLogin: true,
      apiUrl: '',
      keycloakClientId: '',
      keycloakRealm: '',
      keycloakUrl: '',
      production: true,
    })();

    expect(res).toBe(true);
    expect(authService.init).toHaveBeenCalledOnceWith({});
  });

  it('sets auth type based on env for login with Keycloak', async () => {
    const authService = jasmine.createSpyObj('authService', ['init']);
    authService.init.and.callFake(() => Promise.resolve(true));
    const location = jasmine.createSpyObj('Location', ['getState', 'prepareExternalUrl']);

    const res = await initializeAuth(authService, location, {
      isLegacyLogin: false,
      apiUrl: '',
      keycloakClientId: '',
      keycloakRealm: '',
      keycloakUrl: '',
      production: false,
    })();

    expect(res).toBe(true);
    expect(authService.init).toHaveBeenCalledTimes(1);
  });
});
