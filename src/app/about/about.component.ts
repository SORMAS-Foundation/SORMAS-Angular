import { Component, OnInit } from '@angular/core';
import { version } from '../../../package.json';
import { VERSION } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public version: string = version;
  public ngVersion: string = VERSION.full;
}
