import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserLoggedIn = false; // todo false
  private options: any = {};

  constructor(private router: Router) {}

  init(options: any): Promise<boolean> {
    this.options = options;

    if (!this.isLoggedIn()) {
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

  logout(): void {
    throw new Error('Method not implemented.');
  }

  isLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }
}
