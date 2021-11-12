import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ADD_MODAL_NARROW, SentResourceTypes } from '../../../app.constants';
import { PersonDto, ContactDto } from '../../../_models/models';
import { FormActionsService } from '../../../_services/form-actions.service';
import { SendResourceService } from '../../../_services/send-resource.service';
import { ContactAddEditComponent } from '../../contact-add-edit/contact-add-edit.component';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-person-contacts-list',
  templateUrl: './person-contacts-list.component.html',
  styleUrls: ['./person-contacts-list.component.scss'],
})
export class PersonContactsListComponent implements OnDestroy, OnInit {
  config: FormElementBase<any>;
  group: FormGroup;
  formId: string;

  person: PersonDto;
  contacts: any[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private sendResourceService: SendResourceService,
    private formActionsService: FormActionsService,
    private translateService: TranslateService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.sendResourceService.getResource().subscribe((response: any) => {
        if (
          response.fromComponent === SentResourceTypes.PERSON_DATA ||
          response.fromComponent === SentResourceTypes.EVENT_PARTICIPANT_DATA
        ) {
          this.person = response.resource?.person || response.resource;
          this.contacts = JSON.parse(JSON.stringify(this.person.personContactDetails));
        }
      })
    );
    this.subscriptions.push(
      this.formActionsService
        .getDiscard()
        .pipe(filter(({ formId }) => this.formId === formId))
        .subscribe(() => {
          this.contacts = JSON.parse(JSON.stringify(this.person.personContactDetails));
        })
    );
  }

  newContact(): void {
    this.openModal({
      title: this.translateService.instant('strings.entityPersonContactDetail'),
    });
  }

  editContact(event: any): void {
    this.openModal({
      title: this.translateService.instant('strings.entityPersonContactDetail'),
      resource: event,
    });
  }

  deleteContact(address: any): void {
    this.contacts = this.contacts.filter((item) => item.uuid !== address.uuid);
    this.group.get(this.config.key)?.setValue(this.contacts);
    this.formActionsService.setInputChange(this.formId, this.config.key, true);
  }

  openModal(data: any): void {
    const dialogRef = this.dialog.open(ContactAddEditComponent, {
      maxWidth: ADD_MODAL_NARROW,
      data,
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe(({ resource, deleteResource } = {}) => {
        if (!resource) {
          return;
        }
        if (deleteResource) {
          this.deleteContact(resource);
          this.group.get(this.config.key)?.setValue(this.contacts);
          return;
        }
        if (data.resource) {
          const target = this.contacts.find((item) => item.uuid === data.resource.uuid);
          Object.keys(resource).forEach((key) => {
            target[key] = resource[key as keyof ContactDto];
          });
        } else {
          this.contacts.push(resource);
        }
        this.contacts = JSON.parse(JSON.stringify(this.contacts));
        this.group.get(this.config.key)?.setValue(this.contacts);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
