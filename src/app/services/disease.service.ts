import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseDataService } from '../shared/http/BaseDataService';
import { Disease, DiseaseResponsePayload } from './payloads/disease-reponse';

@Injectable({
  providedIn: 'root',
})
export class DiseaseService extends BaseDataService {
  constructor(private http: HttpClient) {
    super();
  }

  getDiseaseData(): Observable<Disease[]> {
    // todo base url
    return this.http
      .get<DiseaseResponsePayload>('https://demo7548196.mockable.io/api/diseases/overview')
      .pipe(
        map((data) => Object.keys(data).map((k) => ({ name: k, ...data[k] }))),
        catchError(this.handleError)
      );
  }
}
