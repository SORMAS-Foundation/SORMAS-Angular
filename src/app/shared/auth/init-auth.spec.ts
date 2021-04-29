import { initializeAuth } from './init-auth';

describe('initializeAuth', () => {
  it('sets auth type based on env for legacy login', async () => {
    const authService = jasmine.createSpyObj('authService', ['init']);
    authService.init.and.callFake(() => Promise.resolve(true));
    const location = jasmine.createSpyObj('Location', ['getState']);
    const http = jasmine.createSpyObj('HttpClient', ['init']);
    const helperService = jasmine.createSpyObj('HelperService', ['init']);

    const res = await initializeAuth(authService, location, http, helperService, {
      isLegacyLogin: true,
      production: true,
    })();

    expect(res).toBe(true);
    expect(authService.init).toHaveBeenCalledOnceWith({});
  });

  it('sets auth type based on env for login with Keycloak', async () => {
    const authService = jasmine.createSpyObj('authService', ['init']);
    authService.init.and.callFake(() => Promise.resolve(true));
    const location = jasmine.createSpyObj('Location', ['getState', 'prepareExternalUrl']);
    const http = jasmine.createSpyObj('HttpClient', ['get']);
    const helperService = jasmine.createSpyObj('HelperService', ['init']);

    const res = await initializeAuth(authService, location, http, helperService, {
      isLegacyLogin: false,
      production: false,
    })();

    expect(res).toBe(true);
    expect(authService.init).toHaveBeenCalledTimes(1);
  });
});
