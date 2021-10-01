import { Component } from '@angular/core';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { BaseService } from '../../_services/api/base.service';
import { FORM_DATA_DATABASE_EXPORTS } from './exports-form-data';

@Component({
  selector: 'app-exports',
  templateUrl: './exports.component.html',
  styleUrls: ['./exports.component.scss'],
})
export class ExportsComponent {
  myFormElements: FormBase<any>[] = FORM_DATA_DATABASE_EXPORTS;

  public resourceService: BaseService<any>;
}
