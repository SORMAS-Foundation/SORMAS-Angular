import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { Subscription } from 'rxjs';
import { FormElementBase } from '../../types/form-element-base';
import { FormBaseComponent } from '../form-base.component';

@Component({
  selector: 'app-form-multiselect',
  templateUrl: './form-multiselect.component.html',
  styleUrls: ['./form-multiselect.component.scss'],
})
export class FormMultiselectComponent extends FormBaseComponent implements OnInit, OnDestroy {
  @Input() group: UntypedFormGroup;
  @Input() config: FormElementBase<any>;
  @Input() className: string;

  options: any[] = [];
  selection: any[] = [];
  subscriptions: Subscription[] = [];
  searchResults: number;
  allSelected: boolean;

  @ViewChild('multiselect') multiselect: MatSelect;
  @ViewChild('searchBox') searchBox: any;

  ngOnInit(): void {
    this.options = this.config.options.slice();

    const control = this.group.get(this.config.key);

    if (control) {
      this.selection = this.options.filter((item) => control.value?.includes(item.key));
      this.subscriptions.push(
        control.valueChanges.subscribe((val) => {
          this.selection = this.options.filter((item) => val?.includes(item.key));
        })
      );
    }
  }

  clearSearch(): void {
    this.searchBox.nativeElement.value = '';
    this.filterOptions();
  }

  filterOptions(): void {
    const searchTerm = this.searchBox.nativeElement.value;

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

  selectAll(): void {
    this.multiselect.options.forEach((item: MatOption) => {
      item.select();
    });
  }

  deselectAll(): void {
    this.multiselect.options.forEach((item: MatOption) => {
      item.deselect();
    });
  }

  toggleSelection({ checked }: any): void {
    if (checked) {
      this.selectAll();
    } else {
      this.deselectAll();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
