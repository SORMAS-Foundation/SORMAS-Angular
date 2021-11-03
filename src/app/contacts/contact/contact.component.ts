import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityLink } from '../../_constants/common';
import { NotificationService } from '../../_services/notification.service';
import { ContactDto } from '../../_models/contactDto';
import { ContactService } from '../../_services/api/contact.service';
import { actionsEditDefs } from './contact-actions-data';

// case routing for tabs
const contactLinks = (contactId: string): EntityLink[] => {
  return [
    { link: `/contacts/contact/${contactId}/details`, title: 'captions.Contact' },
    { link: `/contacts/contact/${contactId}/person`, title: 'captions.Contact.person' },
    { link: `/contacts/contact/${contactId}/epidemiological-data`, title: 'captions.EpiData' },
    {
      link: `/contacts/contact/${contactId}/follow-up`,
      title: 'captions.contactFollowUpVisitsOverview',
    },
  ];
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contact: ContactDto;
  links: EntityLink[] = [];
  currentSubPage: EntityLink;
  contactId: any;
  actionEditOptions = actionsEditDefs;

  constructor(
    public contactService: ContactService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.contactId = routeParams.contactId;
    this.links = contactLinks(this.contactId);
    this.contactService.getById(this.contactId).subscribe({
      next: (response: any) => {
        this.contact = response;
      },
      error: (err: any) => {
        this.notificationService.error(err);
      },
      complete: () => {},
    });
  }

  onActivate(componentReference: any): void {
    if (typeof componentReference.updateComponent === 'function') {
      componentReference.updateComponent(this.contact, this.contactService);
    }
  }

  onContactDelete(): void {
    this.router.navigate(['/contacts/list']);
  }
}
