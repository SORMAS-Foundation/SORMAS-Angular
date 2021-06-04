import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../_models/common';
import { CONFIG_SAMPLES } from '../../_constants/storage';
import { SampleDto } from '../../_models/sampleDto';
import { SampleService } from '../../_services/api/sample.service';
import { defaultColumnDefs } from './samples-list-table-data';

@Component({
  selector: 'app-samples-list',
  templateUrl: './samples-list.component.html',
  styleUrls: ['./samples-list.component.scss'],
})
export class SamplesListComponent implements OnInit {
  tasks: SampleDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_SAMPLES;

  constructor(public sampleService: SampleService) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }
}
