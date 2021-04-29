import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PositionType, BasicPositionType } from 'src/app/_models/positionType';
import {
  BasicPosition,
  CardAppearanceOptions,
  CardStatusMap,
  Position,
} from 'src/app/_constants/enums';
import { CardActionsIcons } from 'src/app/_constants/icons';
import { CardActions } from 'src/app/_models/cardActions';
import { CardAppearance, CardStatus, CardType } from 'src/app/_models/cardAppearance';
import { AVAILABLE_ACTIONS } from './card-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() id: string;
  @Input() title: string;
  @Input() titlePosition: BasicPositionType = BasicPosition.LEFT;
  @Input() collapse = false;
  @Input() collapsePosition: PositionType = Position.RIGHT;
  @Input() select = false;
  @Input() selectPosition: PositionType = Position.TOPLEFT;
  @Input() edit = false;
  @Input() editPosition: PositionType = Position.BOTTOMRIGHT;
  @Input() delete = false;
  @Input() deletePosition: PositionType = Position.BOTTOMRIGHT;
  @Input() link = false;
  @Input() linkPosition: PositionType = Position.BOTTOMRIGHT;
  @Input() unlink = false;
  @Input() unlinkPosition: PositionType = Position.BOTTOMRIGHT;
  @Input() refresh = false;
  @Input() refreshPosition: PositionType = Position.BOTTOMRIGHT;
  @Input() width: number;
  @Input() type: CardType;
  @Input() appearance: CardAppearance = CardAppearanceOptions.STANDARD;
  @Input() status: CardStatus = CardStatusMap.CONFIRMED;
  @Input() data: any;

  @Output() selectCard: EventEmitter<any> = new EventEmitter();
  @Output() editCard: EventEmitter<any> = new EventEmitter();
  @Output() deleteCard: EventEmitter<any> = new EventEmitter();
  @Output() linkCard: EventEmitter<any> = new EventEmitter();
  @Output() unlinkCard: EventEmitter<any> = new EventEmitter();
  @Output() refreshCard: EventEmitter<any> = new EventEmitter();

  actions = AVAILABLE_ACTIONS;
  icons = CardActionsIcons;
  collapsed = false;
  selected = false;
  actionsTop: CardActions[] = [];
  actionsBottom: CardActions[] = [];

  ngOnInit(): void {
    this.actions.forEach((action) => {
      const hasAction = this[action.type as keyof this];
      if (hasAction) {
        const position = (this[`${action.type}Position` as keyof this] as unknown) as PositionType;
        if (position.includes('TOP')) {
          this.actionsTop.push({ ...action, position });
        } else {
          this.actionsBottom.push({ ...action, position });
        }
      }
    });
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  getClassCollapse(): string {
    if (this.collapsePosition.includes('LEFT')) {
      return 'collapse-left';
    }
    return 'collapse-right';
  }

  getIcon(type: string): string {
    return this.icons[type as keyof typeof CardActionsIcons];
  }

  processAction(event: any): void {
    switch (event.action) {
      case 'select':
        this.selected = event.checked;
        this.selectCard.emit(event.checked);
        break;
      case 'edit':
        this.editCard.emit(this.data.uuid);
        break;
      case 'link':
        this.linkCard.emit(this.data.uuid);
        break;
      case 'unlink':
        this.unlinkCard.emit(this.data.uuid);
        break;
      case 'refresh':
        this.refreshCard.emit(this.data.uuid);
        break;
      default:
        break;
    }
  }
}
