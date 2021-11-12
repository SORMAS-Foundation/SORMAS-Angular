import { Component } from '@angular/core';
import * as data from './user-add-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { UserService } from '../../_services/api/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent {
  public formData: FormBase<any>[] = data.FORM_DATA_USER_ADD;
  formId = 'userAdd';

  constructor(public userService: UserService) {}
}
