import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-population-import',
  templateUrl: './population-import.component.html',
  styleUrls: ['./population-import.component.scss'],
})
export class PopulationImportComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      date: new FormControl(),
      overwriteEntries: new FormControl(true),
      separator: new FormControl('DEFAULT'),
    });
  }
}
