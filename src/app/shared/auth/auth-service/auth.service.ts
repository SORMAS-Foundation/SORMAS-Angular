import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends KeycloakService {
  private isUserLoggedIn = false; // todo false
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
    // todo
    return 'john-doe';
  }

  getUserRoles(): string[] {
    // todo
    return ['admin'];
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
      await this.http.post('/login', { username, pw }).toPromise();
      this.isUserLoggedIn = true;
      return Promise.resolve(true);
    } catch {
      return Promise.resolve(false);
    }
  }
}
