import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthLegacyGuard {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> | boolean {
    const requiredRoles = route.data.roles;

    // Allow the user to to proceed if no additional roles are required to access the route.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return this.authService.isLoggedIn();
    }

    return requiredRoles.every((role) => this.authService.getUserRoles().includes(role))
      ? this.authService.isLoggedIn()
      : Promise.resolve(false);
  }
}
