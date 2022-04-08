import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class ExportService {
  constructor(public helperService: HelperService, public httpClient: HttpClient) {}
  export(type: string, url: string): Observable<any> {
    return this.httpClient.post(`${this.helperService.getApiUrl()}/${url}`, {
      exportType: type,
    });
  }
}
