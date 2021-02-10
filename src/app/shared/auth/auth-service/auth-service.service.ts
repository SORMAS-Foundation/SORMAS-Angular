import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  init(options: any): Promise<boolean> {
    console.log(options);

    return Promise.resolve(false);
  }
}
