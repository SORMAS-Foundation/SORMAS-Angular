import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const baseUrl = environment.apiUrl;

    const apiReq = req.clone({
      url: `${baseUrl}${req.url}`,
      // todo - remove this header after the bearer tokens issue is resolved in Sormas-Rest API
      headers: new HttpHeaders({
        Authorization: `Basic ${btoa('SurvOff:SurvOff')}`,
      }),
    });

    return next.handle(apiReq);
  }
}
