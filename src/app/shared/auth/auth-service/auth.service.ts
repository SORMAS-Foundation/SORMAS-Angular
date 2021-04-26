import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import {EnvironmentService} from '../../../_services/api/environment.service';

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

  constructor(private router: Router, private http: HttpClient, private environmentService: EnvironmentService) {
    super();
  }

  private flush(): void {
    this.isUserLoggedIn = false;
    this.userName = '';
    this.roles = [];
    this.options = {};
  }

  async init(options: any): Promise<boolean> {
    console.log('1111111111111111111111111');
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
      await this.http.post('/logout', {}).toPromise();
      this.flush();
      this.router.navigate(['/login']);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const result = await this.http
        .post<LoginResultPayload>('/check-session', {}, { withCredentials: true })
        .toPromise<LoginResultPayload>();
      this.userName = result.userName;
      this.roles = result.roles;
      this.isUserLoggedIn = true;
    } catch {
      this.flush();
    }
    return Promise.resolve(this.isUserLoggedIn);
  }

  async loginUser(username: string, pw: string): Promise<boolean> {
    try {
      const result = await this.http
        .post<LoginResultPayload>('/login', { username, pw }, { withCredentials: true })
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
