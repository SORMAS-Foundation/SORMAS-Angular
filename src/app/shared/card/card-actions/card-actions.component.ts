import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardActions } from '../../../_models/cardActions';
import { CardActionsIcons } from '../../../_constants/icons';

@Component({
  selector: 'app-card-actions',
  templateUrl: './card-actions.component.html',
  styleUrls: ['./card-actions.component.scss'],
})
export class CardActionsComponent implements OnInit {
  @Input() actions: CardActions[] = [];

  @Output() actionSelected: EventEmitter<any> = new EventEmitter();

  icons = CardActionsIcons;

  ngOnInit(): void {
    this.actions.sort((a, b) => a.position.localeCompare(b.position));
  }

  getIcon(type: string): string {
    return this.icons[type as keyof typeof CardActionsIcons];
  }

  announceAction(event: any, action: string): void {
    this.actionSelected.emit({ action, checked: event.checked });
  }
}
