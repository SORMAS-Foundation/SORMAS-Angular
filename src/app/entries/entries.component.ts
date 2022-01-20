import { Component } from '@angular/core';
import { HEADER_HEIGHT } from '../app.constants';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss'],
})
export class EntriesComponent {
  headerHeight = HEADER_HEIGHT;
}
