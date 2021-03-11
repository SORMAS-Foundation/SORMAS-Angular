import { Component, OnInit } from '@angular/core';

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 21, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 22, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 23, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 24, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 25, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 26, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 27, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 28, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 29, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 30, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 31, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 32, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 33, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 34, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 35, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 36, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 37, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 38, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 39, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 40, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 41, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 42, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 43, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 44, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 45, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 46, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 47, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 48, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 49, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 50, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 51, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 52, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 53, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 54, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 55, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 56, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 57, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 58, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 59, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 60, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss'],
})
export class Table2Component implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  start = 0;
  limit = 15;
  end: number = this.limit + this.start;

  ngOnInit(): void {
    this.dataSource = this.getTableData(this.start, this.end);
    this.updateIndex();
  }

  onTableScroll(e: any): void {
    const tableViewHeight = e.target.offsetHeight; // viewport
    const tableScrollHeight = e.target.scrollHeight; // length of all table
    const scrollLocation = e.target.scrollTop; // how far user scrolled

    // If the user has scrolled within 200px of the bottom, add more data
    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;
    if (scrollLocation > limit) {
      const data = this.getTableData(this.start, this.end);
      this.dataSource = this.dataSource.concat(data);
      this.updateIndex();
    }
  }

  getTableData(start: any, end: any): any {
    return ELEMENT_DATA.filter((value, index) => index >= start && index < end);
  }

  updateIndex(): void {
    this.start = this.end;
    this.end = this.limit + this.start;
  }

  sort() {
    this.dataSource = ELEMENT_DATA.reverse();
  }
}
