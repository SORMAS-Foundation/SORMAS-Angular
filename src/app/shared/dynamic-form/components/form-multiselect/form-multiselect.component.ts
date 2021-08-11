import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormElementBase } from '../../types/form-element-base';
import { FormBaseComponent } from '../form-base.component';

@Component({
  selector: 'app-form-multiselect',
  templateUrl: './form-multiselect.component.html',
  styleUrls: ['./form-multiselect.component.scss'],
})
export class FormMultiselectComponent extends FormBaseComponent implements OnInit, OnDestroy {
  @Input() group: FormGroup;
  @Input() config: FormElementBase<any>;

  options: any[] = [];
  selection: any[] = [];
  subscriptions: Subscription[] = [];
  searchResults: number;

  ngOnInit(): void {
    this.options = this.config.options.slice();
    this.group.addControl('searchTerm', new FormControl());

    const control = this.group.get(this.config.key);

    if (control) {
      this.selection = this.options.filter((item) => control.value.includes(item.key));
      this.subscriptions.push(
        control.valueChanges.subscribe((val) => {
          this.selection = this.options.filter((item) => val.includes(item.key));
        })
      );
    }
  }

  clearSearch(): void {
    this.group.patchValue({ searchTerm: '' });
    this.filterOptions();
  }

  filterOptions(): void {
    const searchTerm = this.group.get('searchTerm')?.value;

    this.searchResults = 0;

    this.options.forEach((opt) => {
      const status = searchTerm
        ? !opt.value.toLowerCase().includes(searchTerm.toLowerCase())
        : false;
      // eslint-disable-next-line no-param-reassign
      opt.hidden = status;

      if (!status) {
        this.searchResults += 1;
      }
    });
  }

  remove(opt: any): void {
    const control = this.group.get(this.config.key);

    if (control) {
      const newVal: any = {};
      newVal[this.config.key] = control?.value.filter((item: any) => item !== opt.key);
      this.group.patchValue(newVal);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
