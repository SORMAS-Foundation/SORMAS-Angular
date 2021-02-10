import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthLegacyGuard {
  canActivate(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: ActivatedRouteSnapshot,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    // todo - check if user is logged in and required roles are enabled for this route
    return true;
  }
}
