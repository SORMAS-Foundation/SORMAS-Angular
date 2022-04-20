import { Component, OnInit } from '@angular/core';
import { USER_PROFILE_FORM_ID } from '../app.constants';
import { AuthService } from '../shared/auth/auth-service/auth.service';
import { FormBase } from '../shared/dynamic-form/types/form-element-base';
import { FormElementControlService } from '../_services/form-element-control.service';
import { LocaleService } from '../_services/local.service';
import { FORM_DATA_USER_PROFILE } from './user-profile-form-data';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user = '';
  roles: string[] = [];
  formData: FormBase<any>[] = FORM_DATA_USER_PROFILE;
  formId = USER_PROFILE_FORM_ID;

  constructor(
    private authService: AuthService,
    private localeService: LocaleService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUsername();
    this.roles = this.authService.getUserRoles();

    this.formData = this.formElementControlService.setAttributeToFormElement(
      this.formData,
      'language',
      'value',
      this.localeService.currentLocale
    );
  }

  onFormChange(formValues: any): void {
    const selection = formValues.language;
    if (selection) {
      this.localeService.setLocale(selection);
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
