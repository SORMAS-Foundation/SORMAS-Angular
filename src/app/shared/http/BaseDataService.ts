import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

type ErrorReason = 'client' | 'server';

export interface ApiError {
  error: any;
  message: string;
  errorReason: ErrorReason;
}

function createError(err: HttpErrorResponse, reason: ErrorReason): ApiError {
  return { error: err.error, message: err.message, errorReason: reason };
}

export class BaseDataService {
  constructor() {
    if (new.target === BaseDataService) {
      throw new TypeError('Cannot construct BaseDataService instances directly');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  handleError(err: HttpErrorResponse): Observable<never> {
    // todo logging - send error to remote logging infra

    if (err.error instanceof ErrorEvent) {
      return throwError(createError(err, 'client'));
    }

    if (err.status >= 400 && err.status < 500) {
      return throwError(createError(err, 'client'));
    }

    return throwError(createError(err, 'server'));
  }
}
