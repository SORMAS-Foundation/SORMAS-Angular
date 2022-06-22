import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../_services/notification.service';
import { EventDto } from '../../_models/eventDto';
import { EventService } from '../../_services/api/event.service';
import { HelperService } from '../../_services/helper.service';
import { SendResourceService } from '../../_services/send-resource.service';
import { ExportService } from '../../_services/api/export.service';
import { EventParticipantDto } from '../../_models/eventParticipantDto';
import { actionsEditDefs, actionsMoreDefs } from './event-actions-data';
import {
  EntityLink,
  SentResourceTypes,
  ACTIONS_EVENT_PARTICIPANT,
  EVENT_DETAILS_FORM_ID,
  SMALL_NOTIFICATION_MODAL_WIDTH,
  EXPORT_TYPES,
  API_ROUTE_EVENT_PARTICIPANTS,
  EXPORT_TYPE,
  EXPORT_CUSTOM_MODAL_WIDTH,
  ADD_MODAL_WIDE,
} from '../../app.constants';
import { CustomExportComponent } from '../../shared/modals/custom-export/custom-export.component';
import { FORM_DATA_EXPORT_CONFIGURATION } from './export-configuration-form-data';
import { ImportModalComponent } from '../../shared/modals/import-modal/import-modal.component';
import { EventParticipantService } from '../../_services/api/event-participant.service';

// case routing for tabs
const eventLinks = (eventId: string): EntityLink[] => {
  return [
    { link: `/events/event/${eventId}/details`, title: 'captions.Event', showFormActions: true },
    {
      link: `/events/event/${eventId}/participants`,
      title: 'strings.entityEventParticipants',
      showFormActions: false,
    },
    {
      link: `/events/event/${eventId}/actions`,
      title: 'captions.eventEventActions',
      showFormActions: false,
    },
  ];
};

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit, OnDestroy {
  event: EventDto;
  links: EntityLink[] = [];
  currentSubPage: EntityLink;
  eventId: any;
  showTabs = true;
  subscriptions: Subscription[] = [];
  eventParticipant: EventParticipantDto;
  actionEditOptions = actionsEditDefs;
  actionsMore = actionsMoreDefs;
  formId = EVENT_DETAILS_FORM_ID;

  constructor(
    public eventService: EventService,
    public eventParticipantService: EventParticipantService,
    private activeRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private router: Router,
    private helperService: HelperService,
    private sendResourceService: SendResourceService,
    private dialog: MatDialog,
    private exportService: ExportService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.currentSubPage = this.helperService.getCurrentSubpage(this.router.url, eventLinks);
    this.eventId = routeParams.eventId;
    this.links = eventLinks(this.eventId);
    this.fetchEvent();
    this.fetchEventParticipant();
  }

  fetchEvent(): void {
    this.subscriptions.push(
      this.eventService.getById(this.eventId).subscribe({
        next: (response: any) => {
          this.event = response;
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  fetchEventParticipant(): void {
    this.subscriptions.push(
      this.sendResourceService.getResource().subscribe((response: any) => {
        if (response.fromComponent === SentResourceTypes.EVENT_PARTICIPANT_DATA) {
          this.eventParticipant = response.resource;
        }
      })
    );
  }

  onActivate(componentReference: any): void {
    if (typeof componentReference.updateComponent === 'function') {
      componentReference.updateComponent(this.event, this.eventService);
    }
    this.currentSubPage = this.helperService.getCurrentSubpage(this.router.url, eventLinks);
    const isParticipantProfile = this.router.url.includes('participants-profile');
    setTimeout(() => {
      this.showTabs = !isParticipantProfile;
    });
  }

  addParticipant(): void {
    // eslint-disable-next-line no-console
    console.log('add participant');
  }

  onEventDelete(): void {
    this.router.navigate(['/events/list']);
  }

  onActionSelected(event: any): void {
    switch (event) {
      case ACTIONS_EVENT_PARTICIPANT.BASIC_EXPORT:
        this.exportBasic();
        break;
      case ACTIONS_EVENT_PARTICIPANT.DETAILED_EXPORT:
        this.exportDetailed();
        break;
      case ACTIONS_EVENT_PARTICIPANT.CUSTOM_EXPORT:
        this.customExport();
        break;
      default:
        break;
    }
  }

  customExport(): void {
    this.dialog.open(CustomExportComponent, {
      width: EXPORT_CUSTOM_MODAL_WIDTH,
      data: {
        exportType: EXPORT_TYPE.EVENT_PARTICIPANTS,
        exportFormData: JSON.parse(JSON.stringify(FORM_DATA_EXPORT_CONFIGURATION)),
      },
    });
  }

  exportBasic(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportBasic'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_EVENT_PARTICIPANTS.EXPORT);
  }

  exportDetailed(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportDetailed'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.DETAILED, API_ROUTE_EVENT_PARTICIPANTS.EXPORT);
  }

  openImportModal(): void {
    this.dialog.open(ImportModalComponent, {
      width: ADD_MODAL_WIDE,
      data: {
        title: 'strings.headingImportEventParticipant',
        type: ACTIONS_EVENT_PARTICIPANT.IMPORT,
        service: this.eventParticipantService,
        selectDate: true,
      },
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
