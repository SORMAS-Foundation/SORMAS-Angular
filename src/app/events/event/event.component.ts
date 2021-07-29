import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntityLink } from '../../_constants/common';
import { NotificationService } from '../../_services/notification.service';
import { EventDto } from '../../_models/eventDto';
import { EventService } from '../../_services/api/event.service';

// case routing for tabs
const eventLinks = (eventId: string): EntityLink[] => {
  return [
    { link: `/events/event/${eventId}/details`, title: 'captions.Event' },
    { link: `/events/event/${eventId}/participants`, title: 'strings.entityEventParticipants' },
    { link: `/events/event/${eventId}/actions`, title: 'captions.eventEventActions' },
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
  eventId: any;

  constructor(
    private eventService: EventService,
    private activeRoute: ActivatedRoute,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
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
  }
}
