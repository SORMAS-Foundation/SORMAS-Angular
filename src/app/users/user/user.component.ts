import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDto } from '../../_models/models';
import { NotificationService } from '../../_services/notification.service';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FormElementControlService } from '../../_services/form-element-control.service';
import { FORM_DATA_USER } from './user-form-data';
import { UserService } from '../../_services/api/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: UserDto;
  userId: string;
  myFormElements: FormBase<any>[] = [];
  formData = FORM_DATA_USER;
  constructor(
    public userService: UserService,
    private activeRoute: ActivatedRoute,
    private formElementControlService: FormElementControlService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.userId = routeParams.userId;
    this.userService.getById(this.userId).subscribe({
      next: (response: any) => {
        this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
          response,
          this.formData
        );
        this.user = response;
      },
      error: (err: any) => {
        this.notificationService.error(err);
      },
      complete: () => {},
    });
  }
}
