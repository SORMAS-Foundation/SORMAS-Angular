import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [],
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
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
});
