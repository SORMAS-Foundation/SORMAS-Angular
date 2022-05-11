import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SPECIFIC_SEARCH_TYPE } from '../../../app.constants';

@Component({
  selector: 'app-specific-search-not-found',
  templateUrl: './specific-search-not-found.component.html',
  styleUrls: ['./specific-search-not-found.component.scss'],
})
export class SpecificSearchNotFoundComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  type =
    this.data.type === SPECIFIC_SEARCH_TYPE.CASE_SPECIFIC_SEARCH
      ? SPECIFIC_SEARCH_TYPE.CASE_SPECIFIC_SEARCH.slice(0, -1)
      : SPECIFIC_SEARCH_TYPE.EVENT_SPECIFIC_SEARCH.slice(0, -1);
  notFoundHeading = `strings.headingNo${this.type}Found`;
  notFoundMessage = `strings.messageNo${this.type}Found`;
}
