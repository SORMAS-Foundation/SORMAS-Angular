import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  init(options: any): Promise<boolean> {
    console.log(options);

    return Promise.resolve(true);
  }
}
