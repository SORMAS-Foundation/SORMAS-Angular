import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [],
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loginUser - calls API the correct route', () => {
    service.loginUser('test', 'test');

    const req = httpTestingController.expectOne('/login');

    expect(req.request.method).toEqual('POST');
  });

  it('loginUser - calls API with correct body', () => {
    service.loginUser('test', 'test');
    const req = httpTestingController.expectOne('/login');

    expect(req.request.body).toEqual({ username: 'test', pw: 'test' });
  });

  it('loginUser - returns false when API returns error response code', async () => {
    const mockApiResponseData = {};
    const loginPromise = service.loginUser('test', 'test');
    const req = httpTestingController.expectOne('/login');

    expect(req.request.body).toEqual({ username: 'test', pw: 'test' });
    req.flush(mockApiResponseData, {
      status: 401,
      statusText: '',
    });

    expect(await loginPromise).toBe(false);
  });

  it('loginUser - returns true when API returns succesful response code ', async () => {
    const mockApiResponseData = {};
    const loginPromise = service.loginUser('test', 'test');
    const req = httpTestingController.expectOne('/login');

    expect(req.request.body).toEqual({ username: 'test', pw: 'test' });
    req.flush(mockApiResponseData, {
      status: 200,
      statusText: '',
    });

    expect(await loginPromise).toBe(true);
  });

  it('loginUser - sets data when API returns succesful response code', async () => {
    const mockApiResponseData = { roles: ['A', 'B'], userName: 'test-user' };
    const loginPromise = service.loginUser('test', 'test');
    const req = httpTestingController.expectOne('/login');

    expect(req.request.body).toEqual({ username: 'test', pw: 'test' });
    req.flush(mockApiResponseData, {
      status: 200,
      statusText: '',
    });

    expect(await loginPromise).toBe(true);

    expect(service.getUsername()).toBe(mockApiResponseData.userName);
    expect(service.getUserRoles()).toBe(mockApiResponseData.roles);
  });

  it('logout - calls API the correct route', () => {
    service.logout();

    const req = httpTestingController.expectOne('/logout');

    expect(req.request.method).toEqual('POST');
  });

  it('logout - on success resets data', async () => {
    const logoutPromise = service.logout();

    const req = httpTestingController.expectOne('/logout');
    req.flush(
      {},
      {
        status: 200,
        statusText: '',
      }
    );

    expect(await logoutPromise).toBeUndefined();
    expect(service.getUsername()).toBe('');
    expect(service.getUserRoles()).toEqual([]);
  });

  it('logout - on success navigates to login', async () => {
    const logoutPromise = service.logout();

    const routerSpy = spyOn(router, 'navigate');

    const req = httpTestingController.expectOne('/logout');
    req.flush(
      {},
      {
        status: 200,
        statusText: '',
      }
    );

    expect(await logoutPromise).toBeUndefined();

    expect(routerSpy).toHaveBeenCalledTimes(1);
    expect(routerSpy).toHaveBeenCalledWith(['/login']);
  });

  it('logout - on failiure logs message in console', async () => {
    const logoutPromise = service.logout();
    const consoleSpy = spyOn(console, 'error');

    const req = httpTestingController.expectOne('/logout');
    req.flush(
      {},
      {
        status: 400,
        statusText: 'error',
      }
    );

    await logoutPromise;

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
