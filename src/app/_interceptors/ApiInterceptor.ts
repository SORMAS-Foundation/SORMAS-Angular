import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../shared/auth/auth-service/auth.service';
import { getEnv } from '../../environments/getEnv';
import { HelperService } from '../_services/helper.service';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private helperService: HelperService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return getEnv().isLegacyLogin
      ? from(this.handleLegacy(req, next))
      : from(this.handle(req, next));
  }

  async handle(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    let bearerToken = '';
    if (!req.url.includes('environment.json')) {
      bearerToken = await this.authService.getToken();
    }
    const apiReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${bearerToken}`),
    });

    return next.handle(apiReq).toPromise();
  }

  async handleLegacy(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    const baseUrl = this.helperService.getApiUrl();

    const apiReq = req.clone({
      url: `${baseUrl}${req.url}`,
      withCredentials: true,
    });

    return next
      .handle(apiReq)
      .pipe(
        catchError((err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.authService.logout();
            }
          }
          return throwError(err);
        })
      )
      .toPromise();
  }
}
