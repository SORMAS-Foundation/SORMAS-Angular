import { Component } from '@angular/core';
import { HelperService } from 'src/app/_services/helper.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  constructor(public helperService: HelperService) {}
}
