import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HelperService } from '../helper.service';
import * as constants from "../../app.constants";

@Injectable({
  providedIn: 'root',
})
export class HelperApiService {
  constructor(
    protected httpClient: HttpClient,
    protected helperService: HelperService,
  ) {}

  getLatLng(city: string, address: string): Observable<any> {
    const endpoint = constants.API_ROUTE_HELPER.GET_LAT_LNG;
    const requestPayload: any = {
      city,
      address,
    };

    return this.httpClient
      .post(`${this.helperService.getApiUrl()}/${endpoint}`, requestPayload)
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }
}
