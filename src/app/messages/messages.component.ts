import { Component } from '@angular/core';
import { HEADER_HEIGHT } from '../app.constants';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  headerHeight = HEADER_HEIGHT;
}
