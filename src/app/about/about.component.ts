import { Component, VERSION } from '@angular/core';
import { version } from '../../../package.json';
import { NotificationService } from '../_services/notification.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public version: string = version;
  public ngVersion: string = VERSION.full;

  dataAddress = {
    uuid: 'SDF8F-SGWRR-R09WD-VS9S8',
    city: 'Cluj-Napoca',
    street: 'Sarmisegetuza street',
    houseNumber: 21,
    postalCode: 400592,
    addressTypeDetails: 'Home',
  };
  dataAddress2 = {
    uuid: 'VVAE2-EFR56-7RJTR-3ERE5',
    city: 'Timisoara',
    street: 'Republicii blvd',
    houseNumber: 178,
    postalCode: 502477,
    addressTypeDetails: 'Office',
  };
  dataAddress3 = {
    uuid: 'NFHTD-ERJ5F-XFHE4-4DF56',
    city: 'Oradea',
    street: 'Dunarii street',
    houseNumber: 211,
    postalCode: 420893,
    addressTypeDetails: 'Working point',
  };
  listAddress = [this.dataAddress, this.dataAddress2, this.dataAddress3];

  dataCaseTask = {
    taskType: 'HEALTH_ACTIVITIES',
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
  listCaseTask = [
    this.dataCaseTask,
    this.dataCaseTaskHigh,
    this.dataCaseTaskDone,
    this.dataCaseTaskNotExecutable,
  ];

  dataSample = {
    pathogenTestResult: 'NOT_DONE',
    sampleMaterial: 'SERA',
    samplePurpose: 'INTERNAL',
    sampleDateTime: new Date('2021/01/12'),
    reportDateTime: new Date('2021/01/12'),
    lab: {
      caption: 'Internal/in-house testing',
    },
  } as any;
  dataSamplePositive = {
    ...this.dataSample,
    pathogenTestResult: 'POSITIVE',
    shipmentDate: new Date('2021/01/24'),
    receivedDate: new Date('2021/02/01'),
  };
  dataSamplePending = {
    ...this.dataSample,
    pathogenTestResult: 'PENDING',
    sampleMaterial: 'NASAL_SWAB',
    shipmentDate: new Date('2021/01/24'),
  };
  dataSampleIndeterminate = {
    ...this.dataSample,
    pathogenTestResult: 'INDETERMINATE',
    shipmentDate: new Date('2021/01/24'),
  };
  dataSampleNegative = {
    ...this.dataSample,
    pathogenTestResult: 'NEGATIVE',
    sampleMaterial: 'NASAL_SWAB',
    shipmentDate: new Date('2021/01/24'),
  };
  listSample = [
    this.dataSample,
    this.dataSamplePositive,
    this.dataSamplePending,
    this.dataSampleIndeterminate,
    this.dataSampleNegative,
  ];

  dataCaseEvent = {
    eventTitle: 'Town hall meeting',
    startDate: new Date('2021/03/19'),
    eventLocation: {
      city: 'Cluj-Napoca',
      street: 'Sarmisegetuza street',
      houseNumber: 21,
      postalCode: 400592,
      region: {
        caption: 'Cluj',
      },
    },
  } as any;
  dataCaseEvent2 = {
    ...this.dataCaseEvent,
    eventTitle: 'Screening event',
    startDate: new Date('2021/05/22'),
  } as any;
  listCaseEvent = [this.dataCaseEvent, this.dataCaseEvent2];

  constructor(private notificationService: NotificationService) {}

  notifyInfo(): void {
    this.notificationService.message('A simple message with useful informtion.');
  }

  notifyWarning(): void {
    this.notificationService.warning(
      'Profile is incomplete! You may not have access to certain functionalities.'
    );
  }

  notifyError(): void {
    this.notificationService.error('Ooops! Something went terribly wrong.');
  }

  notifySuccess(): void {
    this.notificationService.success('This is a success message');
  }

  alertPrompt(): void {
    this.notificationService
      .prompt({
        title: 'Are you sure?',
        message: 'This may have serious repercussions. Choose wisely young padawan!',
        buttonDeclineText: 'Run away',
        buttonConfirmText: 'Start praying',
      })
      .subscribe((result) => {
        if (result) {
          // eslint-disable-next-line no-console
          console.log('prompt alert was closed: ', result);
        }
      });
  }

  alertConfirm(): void {
    this.notificationService
      .confirm({
        title: 'Confirm deletion',
        message: 'Are you sure you want to delete this item?<br>This action cannot be reversed.',
        buttonDeclineText: 'Cancel',
        buttonConfirmText: 'Delete',
      })
      .subscribe((result) => {
        if (result) {
          // eslint-disable-next-line no-console
          console.log('warning alert was closed: ', result);
        }
      });
  }

  alertError(): void {
    this.notificationService
      .alert({
        title: 'Please verify your information',
        message:
          '<ul><li>Hospital is missing</li><li>Facility is missing</li><li>Email is not valid</li></ul>',
      })
      .subscribe((result) => {
        // eslint-disable-next-line no-console
        console.log('confirm alert was closed: ', result);
      });
  }

  editAddress(uuid: string): void {
    this.notificationService.prompt({
      title: 'Edit address',
      message: `Address id: ${uuid}`,
    });
  }
}
