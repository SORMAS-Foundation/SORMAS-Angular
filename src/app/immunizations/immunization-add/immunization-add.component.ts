import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { FORM_DATA_IMMUNIZATION_ADD } from './immunization-add-form-data';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { ADD_MODAL_MAX_WIDTH, IMMUNIZATION_ADD_FORM_ID } from '../../app.constants';
import { ImmunizationService } from '../../_services/api/immunization.service';
import { PickPersonModalComponent } from '../../shared/modals/pick-person-modal/pick-person-modal.component';
import { PersonService } from '../../_services/api/person.service';
import { Filter } from '../../_models/common';
import { NotificationService } from '../../_services/notification.service';
import { FormActionsService } from '../../_services/form-actions.service';

const SIMILAR_PERSON_CRITERIA = [
  'firstName',
  'lastName',
  'sex',
  'birthdateDD',
  'birthdateMM',
  'birthdateYYYY',
  'passportNumber',
  'nationalHealthId',
  'uuidExternalIdExternalTokenLike',
];

@Component({
  selector: 'app-immunization-add',
  templateUrl: './immunization-add.component.html',
  styleUrls: ['./immunization-add.component.scss'],
})
export class ImmunizationAddComponent implements AfterViewInit, OnDestroy {
  public formData: FormBase<any>[] = FORM_DATA_IMMUNIZATION_ADD;
  formId = IMMUNIZATION_ADD_FORM_ID;

  subscriptions: Subscription[] = [];

  @ViewChild('form') dynamicForm: any;

  constructor(
    public immunizationService: ImmunizationService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private personService: PersonService,
    private formActionsService: FormActionsService,
    private notificationService: NotificationService
  ) {}

  ngAfterViewInit(): void {
    const { form } = this.dynamicForm;
    if (form) {
      const immunizationManagementOverwrite = form.get('immunizationManagementOverwrite');
      const immunizationManagementStatus = form.get('immunizationManagementStatus');
      const immunizationStatus = form.get('immunizationStatus');

      this.subscriptions.push(
        immunizationManagementOverwrite.valueChanges.subscribe((val: boolean) => {
          if (val) {
            immunizationManagementStatus.enable();
          } else {
            immunizationManagementStatus.disable();
          }
        })
      );

      this.subscriptions.push(
        immunizationManagementStatus.valueChanges.subscribe((val: string) => {
          if (val === 'SCHEDULED' || val === 'ONGOING') {
            immunizationStatus.setValue('PENDING');
          }
          if (val === 'COMPLETED') {
            immunizationStatus.setValue('ACQUIRED');
          }
          if (val === 'CANCELED') {
            immunizationStatus.setValue('NOT_ACQUIRED');
          }
        })
      );
    }
  }

  pickPerson(formValue: any[], similarPersons: any[]): void {
    const [{ person, ...rest }, $service] = formValue;
    const data = {
      info: this.translateService.instant('strings.infoSelectOrCreatePersonForImmunization'),
      person,
      similarPersons,
    };
    const dialogRef = this.dialog.open(PickPersonModalComponent, {
      width: `calc(${ADD_MODAL_MAX_WIDTH} - 16px)`,
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data,
    });
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        this.saveImmunization($service, {
          ...rest,
          ...{
            person: {
              uuid: result.uuid,
            },
          },
        });
      })
    );
  }

  handleSubmit(formValue: any[]): void {
    const [{ person }] = formValue;

    const filters: Filter[] = Object.entries(person)
      .map(([field, value]) => ({
        field,
        value,
      }))
      .filter((prop) => SIMILAR_PERSON_CRITERIA.includes(prop.field));
    this.subscriptions.push(
      this.personService.getSimilar(filters).subscribe({
        next: (similarPersons) => {
          if (similarPersons.length) {
            this.pickPerson(formValue, similarPersons);
            this.formActionsService.setCloseFormModal(this.formId, true);
          } else {
            this.savePerson(formValue);
          }
        },
        error: (error) => {
          this.notificationService.error(error);
        },
      })
    );
  }

  savePerson(formValue: any): void {
    const [{ person, ...rest }, $service] = formValue;
    this.subscriptions.push(
      this.personService.add([person]).subscribe({
        next: (result: any) => {
          this.saveImmunization($service, {
            ...rest,
            ...{
              person: {
                uuid: result.uuid,
              },
            },
          });
        },
        error: (error: any) => {
          this.notificationService.error(error);
        },
      })
    );
  }

  saveImmunization($service: any, data: any): void {
    this.subscriptions.push(
      $service.add([data]).subscribe({
        next: () => {
          this.notificationService.success(
            this.translateService.instant('strings.messageImmunizationSaved')
          );
        },
        error: (error: any) => {
          this.notificationService.error(error);
        },
        complete: () => {
          this.formActionsService.setCloseFormModal(this.formId, true);
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
