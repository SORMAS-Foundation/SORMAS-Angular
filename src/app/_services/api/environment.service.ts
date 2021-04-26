import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  constructor(
    private httpClient: HttpClient) {}

  getEnvironment(): Observable<any> {
    console.log('eeeee');
    return this.httpClient.get('http://localhost:4200/assets/environment.json');
  }
}
