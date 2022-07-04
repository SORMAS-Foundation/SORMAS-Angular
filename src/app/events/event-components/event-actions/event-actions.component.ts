import { Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { CardComponent } from '../../../shared/card/card.component';
import { ActionDto } from '../../../_models/actionDto';
import { ActionService } from '../../../_services/api/action.service';
import { NotificationService } from '../../../_services/notification.service';
import { AddEditBaseModalComponent } from '../../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { ADD_MODAL_MAX_WIDTH } from '../../../_constants/common';
import { EventActionsAddEditModalComponent } from '../../event-actions-add-edit-modal/event-actions-add-edit-modal.component';

@Component({
  selector: 'app-event-actions',
  templateUrl: './event-actions.component.html',
  styleUrls: ['./event-actions.component.scss'],
})
export class EventActionsComponent implements OnInit, OnDestroy {
  eventId: string;
  actions: ActionDto[] = [];
  data: ActionDto[] = [];
  documents: any = {};
  subscriptions: Subscription[] = [];
  form = new UntypedFormGroup({
    status: new UntypedFormControl(),
  });
  maxHeight: number | undefined;

  @ViewChildren(CardComponent) cards!: QueryList<CardComponent>;

  constructor(
    private activeRoute: ActivatedRoute,
    private actionService: ActionService,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.eventId = routeParams.eventId;

    this.subscriptions.push(
      this.actionService.getAll().subscribe({
        next: (response: any) => {
          this.actions = response.elements;
          this.data = this.actions.slice();
          this.getDocuments();
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );

    this.subscriptions.push(
      this.form.valueChanges.subscribe(({ status }) => {
        this.filterList(status);
      })
    );
  }

  getDocuments(): void {
    this.data.forEach((action) => {
      const length = Math.floor(Math.random() * 3);
      const result = [];

      for (let i = 0; i < length; i += 1) {
        result.push({
          name: 'Document name',
          link: '/document.pdf',
        });
      }

      if (action.uuid) {
        this.documents[action.uuid] = result;
      }
    });

    setTimeout(() => {
      this.equalize();
    });
  }

  filterList(status: string): void {
    this.data = status
      ? this.actions.filter((item) => item.actionStatus === status)
      : this.actions.slice();

    this.maxHeight = undefined;
    setTimeout(() => {
      this.equalize();
    });
  }

  equalize(): void {
    const heights = this.cards
      .filter((card) => card.type === 'attachments')
      .map((card) => card.elementRef.nativeElement.offsetHeight);
    this.maxHeight = Math.max(...heights);
  }

  openCreateEventActionModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('strings.headingCreateNewAction'),
        component: EventActionsAddEditModalComponent,
      },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        // eslint-disable-next-line no-empty
        if (result) {
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
