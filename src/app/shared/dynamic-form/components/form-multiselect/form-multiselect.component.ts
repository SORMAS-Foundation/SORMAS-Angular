import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormElementBase } from '../../types/form-element-base';
import { FormBaseComponent } from '../form-base.component';

@Component({
  selector: 'app-form-multiselect',
  templateUrl: './form-multiselect.component.html',
  styleUrls: ['./form-multiselect.component.scss'],
})
export class FormMultiselectComponent extends FormBaseComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() config: FormElementBase<any>;

  options: any[] = [];

  ngOnInit(): void {
    this.options = this.config.options.slice();
    this.group.addControl('searchTerm', new FormControl());
  }

  clearSearch(): void {
    this.group.patchValue({ searchTerm: '' });
    this.filterOptions();
  }

  filterOptions(): void {
    const searchTerm = this.group.get('searchTerm')?.value;

    this.options = searchTerm
      ? this.config.options.filter((item) => {
          return item.value.toLowerCase().includes(searchTerm.toLowerCase());
        })
      : this.config.options.slice();
  }
}
