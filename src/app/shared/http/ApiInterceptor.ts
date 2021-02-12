import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { from, Observable } from 'rxjs';
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
    const baseUrl = environment.apiUrl;

    const bearerToken = await this.authService.getToken();

    const apiReq = req.clone({
      url: `${baseUrl}${req.url}`,
      headers: req.headers.set('Authorization', `Bearer ${bearerToken}`),
    });

    return next.handle(apiReq).toPromise();
  }

  async handleLegacy(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    const baseUrl = environment.apiUrl;

    const apiReq = req.clone({
      url: `${baseUrl}${req.url}`,
    });

    return next.handle(apiReq).toPromise();
  }
}
