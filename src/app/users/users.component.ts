import { Component } from '@angular/core';
import { HEADER_HEIGHT } from '../app.constants';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  headerHeight = HEADER_HEIGHT;
}
