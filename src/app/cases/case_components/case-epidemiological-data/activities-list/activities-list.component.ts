import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SentResourceTypes } from '../../../../app.constants';
import { CaseDataDto, TypeOfPlace } from '../../../../_models/models';
import { SendResourceService } from '../../../../_services/send-resource.service';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss'],
})
export class ActivitiesListComponent implements OnInit, OnDestroy {
  case: CaseDataDto;
  caseId: any;
  activities: any[] = [];
  subscription: Subscription = new Subscription();

  constructor(private sendResourceService: SendResourceService) {}

  ngOnInit(): void {
    this.subscription = this.sendResourceService.getResource().subscribe((response: any) => {
      if (response.fromComponent === SentResourceTypes.EPIDEMIOLOGICAL_DATA) {
        this.activities = response.resource?.epiData?.activitiesAsCase || [];
        this.setActivitiesData(this.activities);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  setActivitiesData(activities: any[]): void {
    this.activities = [];
    activities.forEach((activity: any) => {
      const newActivity = {
        epidTitle: activity.activityAsCaseType,
        typeOfPlace: activity.typeOfPlace as TypeOfPlace,
        priority: 'NORMAL',
        startDate: activity.startDate,
        endDate: activity.endDate,
        description: activity.description,
        location: activity.location,
      };
      this.activities.push(newActivity);
    });
  }
}
