import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ADD_MODAL_MAX_WIDTH, SentResourceTypes } from '../../../app.constants';
import { LocationDto, PersonDto } from '../../../_models/models';
import { FormActionsService } from '../../../_services/form-actions.service';
import { SendResourceService } from '../../../_services/send-resource.service';
import { AddressAddEditComponent } from '../../address-add-edit/address-add-edit.component';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-addresses-list',
  templateUrl: './addresses-list.component.html',
  styleUrls: ['./addresses-list.component.scss'],
})
export class AddressesListComponent implements OnDestroy, OnInit {
  config: FormElementBase<any>;
  group: FormGroup;

  person: PersonDto;
  addresses: any[] = [];
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
          this.addresses = JSON.parse(JSON.stringify(this.person.addresses));
        }
      })
    );
    this.subscriptions.push(
      this.formActionsService.getDiscard().subscribe(() => {
        this.addresses = JSON.parse(JSON.stringify(this.person.addresses));
      })
    );
  }

  newAddress(): void {
    this.openModal({
      title: this.translateService.instant('headingAddAddress'),
    });
  }

  editAddress(event: LocationDto): void {
    this.openModal({
      title: this.translateService.instant('headingEditAddress'),
      resource: event,
    });
  }

  deleteAddress(address: LocationDto): void {
    this.addresses = this.addresses.filter((item) => item.uuid !== address.uuid);
    this.group.get(this.config.key)?.setValue(this.addresses);
    this.formActionsService.setInputChange(this.config.key, true);
  }

  openModal(data: any): void {
    const dialogRef = this.dialog.open(AddressAddEditComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data,
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe(({ resource, deleteResource }) => {
        if (!resource) {
          return;
        }
        if (deleteResource) {
          this.deleteAddress(resource);
          this.group.get(this.config.key)?.setValue(this.addresses);
          return;
        }
        if (data.resource) {
          const target = this.addresses.find((item) => item.uuid === data.resource.uuid);
          Object.keys(resource).forEach((key) => {
            target[key] = resource[key as keyof LocationDto];
          });
        } else {
          this.addresses = [...this.addresses, resource];
        }
        this.group.get(this.config.key)?.setValue(this.addresses);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
