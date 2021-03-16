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

  constructor(private notificationService: NotificationService) {}

  notifyInfo(): void {
    this.notificationService.message('A simple message with usefull informtion.');
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
}
