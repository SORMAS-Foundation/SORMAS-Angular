import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { combineLatest, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { ContactProximity, ContactRelation, Sex } from '../../../app.constants';
import { HelperService } from '../../../_services/helper.service';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-line-listing-new-contacts',
  templateUrl: './line-listing-new-contacts.component.html',
  styleUrls: ['./line-listing-new-contacts.component.scss'],
})
export class LineListingNewContactsComponent implements OnInit, AfterViewInit, OnDestroy {
  config: FormElementBase<any>;
  group: UntypedFormGroup;
  formId: string;

  containerWidth: number;
  actualWidth: number;
  showform = false;
  optionsYears: any[] = [];
  optionsMonths: any[] = [];
  optionsDays: any[] = [];
  optionsSex = Sex;
  optionsProximity = ContactProximity;
  optionsRelation = ContactRelation;
  today = new Date();
  subscriptions: Subscription[] = [];

  @ViewChild('container') container: ElementRef;

  constructor(public helperService: HelperService) {}

  ngOnInit(): void {
    this.optionsYears = this.helperService.getYears();
    this.optionsMonths = this.helperService.getMonths();
    this.group.setControl(this.config.key, new UntypedFormArray([]));
    this.addContact();
  }

  async ngAfterViewInit(): Promise<void> {
    const pause = () => new Promise((resolve) => setTimeout(resolve));
    const containerWidth = this.container.nativeElement.offsetWidth;
    await pause();
    this.showform = true;
    await pause();
    const actualWidth = this.container.nativeElement.offsetWidth;

    this.containerWidth = containerWidth;
    this.actualWidth = actualWidth;
  }

  get contacts(): UntypedFormArray {
    return this.group.get(this.config.key) as UntypedFormArray;
  }

  addContact(): void {
    this.contacts.push(
      new UntypedFormGroup({
        id: new UntypedFormControl(this.getUuid()),
        reportDateTime: new UntypedFormControl(null, [Validators.required]),
        multiDayContact: new UntypedFormControl(),
        firstContactDate: new UntypedFormControl(),
        lastContactDate: new UntypedFormControl(),
        contactProximity: new UntypedFormControl(),
        relationToCase: new UntypedFormControl(),
        firstName: new UntypedFormControl(null, [Validators.required]),
        lastName: new UntypedFormControl(null, [Validators.required]),
        birthDateDD: new UntypedFormControl(),
        birthDateMM: new UntypedFormControl(),
        birthDateYYYY: new UntypedFormControl(),
        sex: new UntypedFormControl(null, [Validators.required]),
      })
    );
    const index = this.contacts.length - 1;
    const newContact = this.contacts.at(index);
    const $watchYears = newContact.get('birthDateYYYY')?.valueChanges;
    const $watchMonths = newContact.get('birthDateMM')?.valueChanges;
    const $watchMultiday = newContact.get('multiDayContact')?.valueChanges;
    const controlFirstContact = newContact.get('firstContactDate');
    controlFirstContact?.disable();
    if ($watchYears && $watchMonths) {
      combineLatest([$watchYears.pipe(startWith(undefined)), $watchMonths]).subscribe(
        ([year, month]: any) => {
          this.optionsDays[newContact.value.id] = this.helperService.getDaysForMonth(month, year);
          const $controlBirthDay = newContact.get('birthDateDD');
          const checkDay = this.optionsDays[newContact.value.id].find(
            (item: any) => item.key === $controlBirthDay?.value
          );
          if ($controlBirthDay?.value && !checkDay) {
            $controlBirthDay?.setValue(null);
          }
        }
      );
    }
    if ($watchMultiday) {
      this.subscriptions.push(
        $watchMultiday.subscribe((val) => {
          if (val) {
            controlFirstContact?.enable();
          } else {
            controlFirstContact?.disable();
            controlFirstContact?.setValue(null);
          }
        })
      );
    }
  }

  removeContact(index: number): void {
    this.contacts.removeAt(index);
  }

  resetAllFieldsByName(name: string): void {
    for (let i = 0; i < this.contacts.length; i += 1) {
      const line = this.contacts.at(i);
      line.get(name)?.reset();
    }
  }

  getUuid(): string {
    return `${Math.random().toString(16).slice(2)}-${new Date().getTime()}`;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
