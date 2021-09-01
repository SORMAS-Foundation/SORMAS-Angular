import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityLink } from '../../_constants/common';
import { NotificationService } from '../../_services/notification.service';
import { EventDto } from '../../_models/eventDto';
import { EventService } from '../../_services/api/event.service';
import { HelperService } from '../../_services/helper.service';

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
export class EventComponent implements OnInit {
  event: EventDto;
  links: EntityLink[] = [];
  currentSubPage: EntityLink;
  eventId: any;
  showTabs = true;

  constructor(
    private eventService: EventService,
    private activeRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private router: Router,
    private helperService: HelperService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.currentSubPage = this.helperService.getCurrentSubpage(this.router.url, eventLinks);
    this.eventId = routeParams.eventId;
    this.links = eventLinks(this.eventId);
    this.eventService.getById(this.eventId).subscribe({
      next: (response: any) => {
        this.event = response;
      },
      error: (err: any) => {
        this.notificationService.error(err);
      },
      complete: () => {},
    });
  }

  onActivate(componentReference: any): void {
    if (typeof componentReference.updateComponent === 'function') {
      componentReference.updateComponent(this.event, this.eventService);
    }
    this.currentSubPage = this.helperService.getCurrentSubpage(this.router.url, eventLinks);
    this.showTabs = !this.router.url.includes('participants-profile');
  }

  addParticipant(): void {
    // eslint-disable-next-line no-console
    console.log('add participant');
  }
}
