import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../_services/notification.service';
import { EventDto } from '../../_models/eventDto';
import { EventGroupService } from '../../_services/api/event-group.service';
import { EventService } from '../../_services/api/event.service';
import { EventGroupDto } from '../../_models/eventGroupDto';
import { EVENT_GROUPS_FORM_ID } from '../../app.constants';
import { FORM_DATA_EVENT_GROUP } from './event-group-profile-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { EventGroupLinkEventsModalComponent } from '../event-group-link-events-modal/event-group-link-events-modal.component';
import { MODAL_MEDIUM_WIDTH } from '../../_constants/common';

@Component({
  selector: 'app-event-group-profile',
  templateUrl: './event-group-profile.component.html',
  styleUrls: ['./event-group-profile.component.scss'],
})
export class EventGroupProfileComponent implements OnInit, OnDestroy {
  eventGroup: EventGroupDto;
  events: EventDto[];
  eventGroupId: any;
  myFormElements: FormBase<any>[] = [];
  formData = FORM_DATA_EVENT_GROUP;
  formId = EVENT_GROUPS_FORM_ID;
  loading = false;

  subscriptions: Subscription[] = [];

  constructor(
    public eventGroupService: EventGroupService,
    private eventService: EventService,
    private activeRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private router: Router,
    private dialog: MatDialog,
    private formElementControlService: FormElementControlService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.eventGroupId = routeParams.eventGroupId;
    this.fetchGroup();
    this.fetchEvents();
  }

  fetchGroup(): void {
    this.subscriptions.push(
      this.eventGroupService.getById(this.eventGroupId).subscribe({
        next: (response: any) => {
          this.eventGroup = response;
          this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
            this.eventGroup,
            this.formData
          );
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  fetchEvents(): void {
    const filters = [
      {
        field: 'eventGroup',
        value: this.eventGroupId,
      },
    ];
    this.loading = true;
    this.subscriptions.push(
      this.eventService.getAll(null, null, filters).subscribe({
        next: (response: any) => {
          this.events = response.elements;
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {
          this.loading = false;
        },
      })
    );
  }

  editEvent(event: any): void {
    this.router.navigate([`/events/event/${event.uuid}/details`]);
  }

  unlinkEvent(event: any): void {
    this.notificationService
      .confirm({
        title: this.translateService.instant('headingConfirmUnlink'),
        message: this.translateService.instant('confirmationUnlinkEventFromGroup'),
        buttonDeclineText: this.translateService.instant('captions.actionCancel'),
        buttonConfirmText: this.translateService.instant('captions.actionConfirm'),
      })
      .subscribe((action) => {
        if (action === 'CONFIRM') {
          this.subscriptions.push(
            this.eventGroupService.unlinkEvent(this.eventGroupId, event.uuid).subscribe({
              next: () => {
                this.fetchEvents();
              },
              error: (err: any) => {
                this.notificationService.error(err);
              },
              complete: () => {},
            })
          );
        }
      });
  }

  linkEvents(eventGroupId: string, events: any[]): void {
    const eventsTmp: any = [];
    events.forEach((item: any) => {
      eventsTmp.push({
        uuid: item.uuid,
      });
    });

    this.subscriptions.push(
      this.eventGroupService.linkEvent(eventGroupId, eventsTmp).subscribe({
        next: () => {
          this.notificationService.success(
            this.translateService.instant('strings.messageEventLinkedToGroup')
          );
          this.fetchEvents();
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  onLinkEvent(): void {
    const dialogRef = this.dialog.open(EventGroupLinkEventsModalComponent, {
      maxWidth: MODAL_MEDIUM_WIDTH,
      data: {
        excludeIds: this.events.map((item) => item.uuid),
      },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.linkEvents(this.eventGroupId, [result.selectedEvent]);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
