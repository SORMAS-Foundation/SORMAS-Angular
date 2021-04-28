import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private apiUrl: string;

  setApiUrl(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  getApiUrl() {
    return this.apiUrl;
  }
}
