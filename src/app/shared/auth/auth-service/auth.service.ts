import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

interface LoginResultPayload {
  userName: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthService extends KeycloakService {
  private isUserLoggedIn = false;
  private userName = '';
  private roles: string[] = [];
  private options: any = {};

  constructor(private router: Router, private http: HttpClient) {
    super();
  }

  async init(options: any): Promise<boolean> {
    this.options = options;

    if (!(await this.isLoggedIn())) {
      this.router.navigate(['/login']);
    }

    return Promise.resolve(true);
  }

  getUsername(): string {
    return this.userName;
  }

  getUserRoles(): string[] {
    return this.roles;
  }

  async logout(): Promise<void> {
    try {
      // todo - route should be  `/sormas-rest/logout`
      await this.http.post('/logout', {}).toPromise();
      this.options = {};
      this.isUserLoggedIn = false;
      this.router.navigate(['/login']);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }

  isLoggedIn(): Promise<boolean> {
    // this needs to be an async call to the API
    return Promise.resolve(this.isUserLoggedIn);
  }

  async loginUser(username: string, pw: string): Promise<boolean> {
    try {
      // todo - route should be  `/sormas-rest/login`
      // todo - encode cred?
      const result = await this.http
        .post<LoginResultPayload>('/login', { username, pw })
        .toPromise<LoginResultPayload>();
      this.userName = result.userName;
      this.roles = result.roles;
      this.isUserLoggedIn = true;
      return Promise.resolve(true);
    } catch {
      return Promise.resolve(false);
    }
  }
}
