import { Component } from '@angular/core';
import { HEADER_HEIGHT } from '../app.constants';

@Component({
  selector: 'app-lab-messages',
  templateUrl: './lab-messages.component.html',
  styleUrls: ['./lab-messages.component.scss'],
})
export class LabMessagesComponent {
  headerHeight = HEADER_HEIGHT;
}
