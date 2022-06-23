import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  EDGE_PANEL_INITIAL_SIZE_SINGLE_COLUMN,
  EDGE_PANEL_INITIAL_SIZE_DOUBLE_COLUMN,
  BREAKPOINTS,
} from '../../app.constants';
import { NotificationService } from '../../_services/notification.service';
import { DocumentService } from '../../_services/api/document.service';
import { DocumentRelatedEntityType } from '../../_models/documentRelatedEntityType';

@Component({
  selector: 'app-documents-panel',
  templateUrl: './documents-panel.component.html',
  styleUrls: ['./documents-panel.component.scss'],
})
export class DocumentsPanelComponent implements OnInit, OnDestroy {
  @Input() entityUuid: string;

  @Output() addItem: EventEmitter<any> = new EventEmitter();

  data: any[] = [];
  initialSize: number;
  subscriptions: Subscription[] = [];
  loading = false;

  constructor(
    private documentService: DocumentService,
    private breakpointObserver: BreakpointObserver,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.fetchData();

    this.subscriptions.push(
      this.breakpointObserver
        .observe([`(max-width: ${BREAKPOINTS.lg}px)`, `(min-width: ${BREAKPOINTS.xxl}px)`])
        .subscribe((state) => {
          this.initialSize = state.matches
            ? EDGE_PANEL_INITIAL_SIZE_DOUBLE_COLUMN
            : EDGE_PANEL_INITIAL_SIZE_SINGLE_COLUMN;
        })
    );
  }

  fetchData(): void {
    this.subscriptions.push(
      this.documentService?.getAll(this.entityUuid, DocumentRelatedEntityType.CONTACT).subscribe({
        next: (response: any) => {
          this.data = response[this.entityUuid];
          this.loading = false;
        },
        error: (err: any) => {
          this.notificationService.error(err);
          this.loading = false;
        },
        complete: () => {},
      })
    );
  }

  create(): void {
    this.addItem.emit();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
