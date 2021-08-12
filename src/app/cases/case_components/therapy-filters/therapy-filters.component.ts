import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-therapy-filters',
  templateUrl: './therapy-filters.component.html',
  styleUrls: ['./therapy-filters.component.scss'],
})
export class TherapyFiltersComponent implements OnInit {
  @Output() selection: EventEmitter<any> = new EventEmitter<any>();

  formFilters: FormGroup;

  ngOnInit(): void {
    this.initFormFilters();
  }

  initFormFilters(): void {
    this.formFilters = new FormGroup({
      type: new FormControl(),
      details: new FormControl(),
    });
  }

  updateFilters(): void {
    const filters = Object.entries(this.formFilters.value)
      .filter((item) => !!item[1])
      .map(([key, val]) => ({ field: key, value: val }));
    this.selection.emit(filters);
  }
}
