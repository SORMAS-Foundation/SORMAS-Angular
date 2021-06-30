import { Component } from '@angular/core';

@Component({
  selector: 'app-case-import',
  templateUrl: './case-import.component.html',
  styleUrls: ['./case-import.component.scss'],
})
export class CaseImportComponent {
  importCases(): void {
    // eslint-disable-next-line no-console
    console.log('START import');
  }
}
