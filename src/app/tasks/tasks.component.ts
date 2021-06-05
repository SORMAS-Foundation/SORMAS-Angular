import { Component } from '@angular/core';
import { HEADER_HEIGHT } from '../app.constants';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  headerHeight = HEADER_HEIGHT;
}
