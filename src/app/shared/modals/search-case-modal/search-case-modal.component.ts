import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-case-modal',
  templateUrl: './search-case-modal.component.html',
  styleUrls: ['./search-case-modal.component.scss']
})
export class SearchCaseModalComponent implements OnInit {
  filtersForm = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

  onFormChange(): void {
  }
}
