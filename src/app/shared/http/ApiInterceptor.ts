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
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth/auth-service/auth.service';
import { getEnv } from '../../../environments/getEnv';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return getEnv().isLegacyLogin
      ? from(this.handleLegacy(req, next))
      : from(this.handle(req, next));
  }

  async handle(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    const bearerToken = await this.authService.getToken();
    const apiReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${bearerToken}`),
    });

    return next.handle(apiReq).toPromise();
  }

  async handleLegacy(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    const baseUrl = environment.apiUrl;

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
