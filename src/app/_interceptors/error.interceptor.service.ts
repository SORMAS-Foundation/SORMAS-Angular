import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../_services/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  statusArray: any[] = [401, 404];

  constructor(
    private router: Router,
    private notificationService: NotificationService,
    public translateService: TranslateService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if ([404].indexOf(err.status) !== -1) {
          this.notificationService.error(this.translateService.instant('NotFound.request'));
        }

        if ([401].indexOf(err.status) !== -1) {
          this.notificationService.error(this.translateService.instant('unauthorized'));
        }

        if (this.statusArray.indexOf(err.status) === -1) {
          this.notificationService.error(this.translateService.instant('NotFound.wentWrong'));
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
