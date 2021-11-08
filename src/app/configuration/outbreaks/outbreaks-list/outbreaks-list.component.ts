import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MODAL_MEDIUM_WIDTH } from '../../../app.constants';
import { TableColumn } from '../../../_models/common';
import { OutbreaksEditComponent } from '../outbreaks-edit/outbreaks-edit.component';

@Component({
  selector: 'app-outbreaks-list',
  templateUrl: './outbreaks-list.component.html',
  styleUrls: ['./outbreaks-list.component.scss'],
})
export class OutbreaksListComponent implements OnDestroy {
  _outbreaks: any[] = [];
  @Input() set outbreaks(raw: any[]) {
    this._outbreaks = raw;
    this.data = this.createData();
    this.columns = this.createColumns();
    this.columnDefs = this.createColumnDefs();
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
  }
  get outbreaks(): any[] {
    return this._outbreaks;
  }

  data: any[] = [];
  dataSource: MatTableDataSource<any>;
  columns: string[] = [];
  columnDefs: TableColumn[] = [];
  subscriptions: Subscription[] = [];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog) {}

  createData(): any[] {
    const data = this.outbreaks.map((obj: any) => {
      const result: any = {
        region: obj.region.caption,
      };
      obj.outbreaks.forEach((item: any) => {
        result[item.disease] = item.affectedDistricts.length
          ? `${item.affectedDistricts.length}/${item.totalDistricts}`
          : '0';
      });
      return result;
    });
    return data;
  }

  createColumns(): any[] {
    const keys = this.data[0] ? Object.keys(this.data[0]) : [];
    const result = keys.map((key) => (key === 'region' ? key : `enum.Disease.${key}`));
    result.push('spacer');
    return result;
  }

  createColumnDefs(): TableColumn[] {
    const result: TableColumn[] = [];
    let keys = this.data[0] ? Object.keys(this.data[0]) : [];
    keys = keys.filter((key) => key !== 'region');
    keys.forEach((key) => {
      result.push({
        name: `enum.Disease.${key}`,
        dataKey: key,
        align: 'right',
      });
    });
    return result;
  }

  getSeverityStatus(value: any): string {
    const [affected, total]: number[] = value.split('/');
    const percentage = affected / total;
    if (!percentage) {
      return 'status-normal';
    }
    if (percentage > 0.75) {
      return 'status-high';
    }
    if (percentage > 0.5) {
      return 'status-medium-high';
    }
    if (percentage > 0.25) {
      return 'status-medium';
    }
    return 'status-low';
  }

  getAffectedDistrictsForRegion(regionName: string, disease: string): string {
    const { outbreaks } = this.outbreaks.find((item) => item.region.caption === regionName);
    const outbreaksForDisease = outbreaks.find((item: any) => item.disease === disease);
    const affected = outbreaksForDisease.affectedDistricts || [];
    return affected.map((item: any) => item.caption).join(', ');
  }

  setOutbreaksForRegion(regionName: string, disease: string): void {
    const { outbreaks, region } = this.outbreaks.find((item) => item.region.caption === regionName);
    const outbreaksForDisease = outbreaks.find((item: any) => item.disease === disease);
    const dialogRef = this.dialog.open(OutbreaksEditComponent, {
      width: MODAL_MEDIUM_WIDTH,
      data: { region, disease, outbreaks: outbreaksForDisease.affectedDistricts || [] },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result: any) => {
        if (result) {
          // refresh list
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
