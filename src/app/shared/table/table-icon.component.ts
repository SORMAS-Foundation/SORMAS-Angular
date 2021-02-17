import { Component, Input, OnInit } from '@angular/core';

interface IconsMapType {
  [key: string]: string;
}

const ICONS_MAP: IconsMapType = {
  PENDING: 'pending_actions',
  DONE: 'done',
  DISCARDED: 'cancel_presentation',
};

@Component({
  selector: 'app-table-icon',
  templateUrl: './table-icon.component.html',
  styleUrls: ['./table-icon.component.scss'],
})
export class TableIconComponent implements OnInit {
  iconType = '';
  @Input() icon = '';
  @Input() label: any;

  ngOnInit(): void {
    this.iconType = this.icon === '$value' ? ICONS_MAP[this.label] : this.icon;
  }
}
