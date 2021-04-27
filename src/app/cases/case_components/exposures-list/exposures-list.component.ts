import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CaseDataDto } from '../../../_models/models';
import { SendResourceService } from '../../../_services/send-resource.service';

@Component({
  selector: 'app-exposures-list',
  templateUrl: './exposures-list.component.html',
  styleUrls: ['./exposures-list.component.scss'],
})
export class ExposuresListComponent implements OnInit, OnDestroy {
  case: CaseDataDto;
  caseId: any;
  exposures: any[];
  subscription: Subscription = new Subscription();

  dataCaseTask = {
    taskType: 'sad',
    taskStatus: 'PENDING',
    priority: 'NORMAL',
    perceivedStart: new Date('2021/02/11'),
    dueDate: new Date('2021/02/26'),
    assigneeUser: {
      caption: 'Surveillance supervisor',
    },
  };

  dataCaseTaskHigh = { ...this.dataCaseTask, ...{ priority: 'HIGH' } };
  dataCaseTaskDone = { ...this.dataCaseTask, ...{ taskStatus: 'DONE' } };
  dataCaseTaskNotExecutable = { ...this.dataCaseTask, ...{ taskStatus: 'NOT_EXECUTABLE' } };

  listExposures: any[] = [
    this.dataCaseTask,
    this.dataCaseTaskHigh,
    this.dataCaseTaskDone,
    this.dataCaseTaskNotExecutable,
  ];

  constructor(private sendResourceService: SendResourceService) {}

  ngOnInit(): void {
    this.subscription = this.sendResourceService.getResource().subscribe((response: any) => {
      this.exposures = response.resource?.epiData?.exposures || [];
      this.setExposuresData(this.exposures);
      console.log('exposures!!!', this.exposures);
      this.exposures = this.listExposures;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  setExposuresData(exposures: any[]): void {
    this.exposures = [];
    exposures.forEach((exposure: any) => {
      const newExposure = {
        taskType: exposure.exposureType,
        taskStatus: 'asd',
        priority: 'NORMAL',
        perceivedStart: new Date(exposure.startDate),
        dueDate: new Date(exposure.startDate),
        assigneeUser: {
          caption: 'Surveillance supervisor',
        },
      };
      this.exposures.push(newExposure);
    });
  }
}
