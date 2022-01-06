import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  version = '0.0.1';
  brand = 'SORMAS';
  phoneNumber = '+01 2345 67890';
}
