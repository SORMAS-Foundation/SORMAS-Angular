import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss'],
})
export class SelectionListComponent {
  @Input() list: any[] = [];
  @Input() key: string;
  @Input() multiple = true;

  @Output() selection: EventEmitter<any> = new EventEmitter();

  @ViewChild('selectionList') selectionList: MatSelectionList;

  onOptionSelected(event: MatSelectionListChange): void {
    const selectedOptions = event.source.selectedOptions.selected;
    this.selection.emit(selectedOptions.map((item) => item.value));
  }

  public deselect(option: any): void {
    this.selectionList.selectedOptions.selected.forEach((item) => {
      if (item.value?.id === option?.id) {
        item.toggle();
      }
    });
  }
}
