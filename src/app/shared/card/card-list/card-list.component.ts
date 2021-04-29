import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Position, CardStatusMap } from '../../../app.constants';
import { BasicPosition } from '../../../_constants/enums';
import { CardAppearance, CardStatus, CardType } from '../../../_models/cardAppearance';
import { BasicPositionType, PositionType } from '../../../_models/positionType';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() initialPageSize: number;

  @Input() cardCollapse = false;
  @Input() cardCollapsePosition: PositionType = Position.RIGHT;
  @Input() cardSelect = false;
  @Input() cardSelectPosition: PositionType = Position.TOPLEFT;
  @Input() cardEdit = false;
  @Input() cardEditPosition: PositionType = Position.BOTTOMRIGHT;
  @Input() cardDelete = false;
  @Input() cardDeletePosition: PositionType = Position.BOTTOMRIGHT;
  @Input() cardLink = false;
  @Input() cardLinkPosition: PositionType = Position.BOTTOMRIGHT;
  @Input() cardUnlink = false;
  @Input() cardUnlinkPosition: PositionType = Position.BOTTOMRIGHT;
  @Input() cardRefresh = false;
  @Input() cardRefreshPosition: PositionType = Position.BOTTOMRIGHT;
  @Input() cardWidth: number;
  @Input() cardType: CardType;
  @Input() cardAppearance: CardAppearance;
  @Input() cardTitleKey: string;
  @Input() cardTitlePosition: BasicPositionType = BasicPosition.LEFT;
  @Input() cardStatusKey: string;

  @Output() selectCard: EventEmitter<any> = new EventEmitter();
  @Output() editCard: EventEmitter<any> = new EventEmitter();
  @Output() deleteCard: EventEmitter<any> = new EventEmitter();
  @Output() linkCard: EventEmitter<any> = new EventEmitter();
  @Output() unlinkCard: EventEmitter<any> = new EventEmitter();
  @Output() refreshCard: EventEmitter<any> = new EventEmitter();

  limit: number;

  ngOnInit(): void {
    this.limit = this.initialPageSize || this.data.length;
  }

  getStatus(data: any): CardStatus {
    return CardStatusMap[data[this.cardStatusKey] as keyof typeof CardStatusMap];
  }

  showMore(): void {
    this.limit = this.data.length;
  }

  showLess(): void {
    this.limit = this.initialPageSize;
  }

  processEditCard(event: any): void {
    this.editCard.emit(event);
  }
}
