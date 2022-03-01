import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import {
  PickPersonType,
  PICK_PERSON_OPTIONS,
  TableAppearanceOptions,
} from '../../../app.constants';
import { Filter, TableColumn } from '../../../_models/common';
import { PersonDto, SimilarPersonDto } from '../../../_models/models';
import { PersonService } from '../../../_services/api/person.service';
import { defaultColumnDefs } from './pick-person-modal-table-data';

@Component({
  selector: 'app-pick-person-modal',
  templateUrl: './pick-person-modal.component.html',
  styleUrls: ['./pick-person-modal.component.scss'],
})
export class PickPersonModalComponent implements OnInit, OnDestroy {
  form: FormGroup;
  defaultColumns: TableColumn[] = [];
  person: SimilarPersonDto;
  matchingPersons: SimilarPersonDto[] = [];
  differentPersons: SimilarPersonDto[] = [];
  selection: SimilarPersonDto | null;
  action: PickPersonType = PICK_PERSON_OPTIONS.SELECT;
  selectOptions = PICK_PERSON_OPTIONS;
  tableAppearanceOptions = TableAppearanceOptions;
  subscriptions: Subscription[] = [];

  constructor(
    public dialogRef: MatDialogRef<PickPersonModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public personService: PersonService
  ) {}

  ngOnInit(): void {
    this.person = this.data.person;
    this.matchingPersons = this.data.similarPersons;
    this.defaultColumns = defaultColumnDefs;
    this.initFiltersForm();
  }

  fetchSimilarPersons(): void {
    const filters = this.createFilters();
    this.subscriptions.push(
      this.personService.getSimilar(filters).subscribe((result) => {
        this.selection = null;
        this.differentPersons = result;
      })
    );
  }

  initFiltersForm(): void {
    this.form = new FormGroup({
      action: new FormControl(this.action),
      firstName: new FormControl(this.person?.firstName),
      lastName: new FormControl(this.person?.lastName),
      uuidExternalIdExternalTokenLike: new FormControl(),
    });
    const controlAction = this.form.get('action');
    if (controlAction) {
      this.subscriptions.push(
        controlAction.valueChanges.subscribe((val) => {
          this.action = val;
          if (this.action === this.selectOptions.SEARCH_AND_SELECT) {
            this.fetchSimilarPersons();
          }
        })
      );
    }
  }

  createFilters(): Filter[] {
    const filters: Filter[] = [];
    Object.entries(this.form.value).forEach(([field, value]) => {
      if (field !== 'action' && value !== null && value !== undefined) {
        filters.push({ field, value });
      }
    });
    return filters;
  }

  onSelectEvent(event: any): void {
    this.selection = event?.selected[0] ?? null;
  }

  onFilterChange(): void {
    this.fetchSimilarPersons();
  }

  confirm(): void {
    if (this.selection) {
      this.dialogRef.close({
        selection: this.selection,
      });
      return;
    }
    this.personService.add([this.person as PersonDto]).subscribe((result) => {
      this.dialogRef.close({
        selection: result,
      });
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
