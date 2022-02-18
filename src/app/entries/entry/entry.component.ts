import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EntityLink, ENTRY_DETAILS_FORM_ID } from '../../app.constants';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { TravelEntryDto } from '../../_models/travelEntryDto';
import { TravelEntryService } from '../../_services/api/travel-entry-service';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { HelperService } from '../../_services/helper.service';
import { NotificationService } from '../../_services/notification.service';
import { FORM_DATA_ENTRY } from '../travel-entry/entry-form-data';
import { actionsEditDefs } from './entry-actions.data';

const entryLinks = (entryId: string): EntityLink[] => {
  return [
    {
      link: `/entries/entry/${entryId}/travel-entry`,
      title: 'captions.TravelEntry',
      showFormActions: true,
    },
    {
      link: `/entries/entry/${entryId}/travel-entry-person`,
      title: 'captions.TravelEntry.person',
      showFormActions: false,
    },
  ];
};

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent implements OnInit, OnDestroy {
  entry: TravelEntryDto;
  entryId: string;
  links: EntityLink[] = [];
  currentSubPage: EntityLink;
  myFormElements: FormBase<any>[] = [];
  actionEditOptions = actionsEditDefs;
  formData = FORM_DATA_ENTRY;
  formId = ENTRY_DETAILS_FORM_ID;

  private subscription: Subscription[] = [];

  constructor(
    public entryService: TravelEntryService,
    private activeRoute: ActivatedRoute,
    private formElementControlService: FormElementControlService,
    private notificationService: NotificationService,
    private helperService: HelperService,
    private router: Router
  ) {}

  addEntry(): void {
    // eslint-disable-next-line no-console
    console.log('add entry');
  }

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.currentSubPage = this.helperService.getCurrentSubpage(this.router.url, entryLinks);
    this.entryId = routeParams.entryId;
    this.links = entryLinks(this.entryId);
    this.subscription.push(
      this.entryService.getById(this.entryId).subscribe({
        next: (response: any) => {
          this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
            response,
            this.formData
          );
          this.entry = response;
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  onEntryDelete(): void {
    // eslint-disable-next-line no-console
    console.log('Delete travel entry');
  }

  onActivate(componentReference: any): void {
    if (typeof componentReference.updateComponent === 'function') {
      componentReference.updateComponent(this.entry, this.entryService);
    }
    this.currentSubPage = this.helperService.getCurrentSubpage(this.router.url, entryLinks);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
