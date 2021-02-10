import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private options: any = {};

  init(options: any): Promise<boolean> {
    this.options = options;

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

  logout() {
    throw new Error('Method not implemented.');
  }
}
