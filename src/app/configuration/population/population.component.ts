import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { POPULATION_IMPORT_MODAL_WIDTH } from '../../app.constants';
import { PopulationImportComponent } from './population-import/population-import.component';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss'],
})
export class PopulationComponent {
  constructor(private dialog: MatDialog) {}

  openImportModal(): void {
    this.dialog.open(PopulationImportComponent, {
      width: POPULATION_IMPORT_MODAL_WIDTH,
    });
  }
}
