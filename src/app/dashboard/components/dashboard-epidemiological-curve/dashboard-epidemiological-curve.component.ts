import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { format } from 'date-fns';
import { ECharts, EChartsOption } from 'echarts';
import { Subscription } from 'rxjs';
import {
  CASE_CLASIFICATION_COLORS_MAP,
  CHART_TOOLTIP_COLORS_MAP,
  CHART_LABEL_COLOR,
  CHART_LABEL_FONT_FAMILY,
  CHART_LABEL_FONT_SIZE,
  COMMON_DATE_FORMAT,
  MONTH_MEDIUM_DATE_FORMAT,
  PRESENT_CONDITION_COLORS_MAP,
  WEEK_OF_YEAR_DATE_FORMAT,
} from '../../../app.constants';
import { Filter, ViewOptions } from '../../../_models/common';
import { DashboardEpiDataCaseClassificationService } from '../../../_services/api/dashboard-epi-data-case-classification.service';
import { DashboardEpiDataPresentConditionService } from '../../../_services/api/dashboard-epi-data-present-condition.service';
import { FilterService } from '../../../_services/filter.service';
import { NotificationService } from '../../../_services/notification.service';

const SERIES_OPTIONS = {
  type: 'bar',
  stack: 'Cases',
  emphasis: {
    focus: 'series',
  },
  barMaxWidth: 30,
  barMinWidth: 18,
  label: {
    show: true,
    color: '#2B323D',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 2,
    padding: [1, 5],
  },
};

@Component({
  selector: 'app-dashboard-epidemiological-curve',
  templateUrl: './dashboard-epidemiological-curve.component.html',
  styleUrls: ['./dashboard-epidemiological-curve.component.scss'],
})
export class DashboardEpidemiologicalCurveComponent implements OnInit, OnDestroy {
  @Output() epiCurveViewUpdate: EventEmitter<ViewOptions> = new EventEmitter();

  data: any[] = [];
  originalData: any[] = [];
  filters: Filter[] = [];
  subscriptions: Subscription[] = [];
  chart: ECharts;
  chartOption: EChartsOption;
  form = new FormGroup({});
  viewMode: ViewOptions = 'PRIMARY';
  optimalEntriesNumber = 7;
  optimalEntriesNumberWide = 12;

  constructor(
    private epiDataCaseClassificationService: DashboardEpiDataCaseClassificationService,
    private epiDataPresentConditionService: DashboardEpiDataPresentConditionService,
    public filterService: FilterService,
    private notificationService: NotificationService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.watchFilters();
  }

  initForm(): void {
    this.form = new FormGroup({
      epiCurveGrouping: new FormControl('WEEK'),
      showMinimumEntries: new FormControl(true),
      dataType: new FormControl('CASE_STATUS'),
    });
    this.subscriptions.push(
      this.form.valueChanges.subscribe(() => {
        this.fetchEpiData();
      })
    );
  }

  watchFilters(): void {
    this.subscriptions.push(
      this.filterService.getFilters().subscribe((response) => {
        this.filters = response.filters;
        this.fetchEpiData();
      })
    );
  }

  fetchEpiData(): void {
    const validFilters = ['dateFrom', 'dateTo', 'disease'];
    const service =
      this.form.value.dataType === 'CASE_STATUS'
        ? this.epiDataCaseClassificationService
        : this.epiDataPresentConditionService;
    const formValues = Object.entries(this.form.value).map(([field, value]) => ({
      field,
      value,
    }));
    const filters = [
      ...this.filters.filter((item: any) => validFilters.includes(item.field)),
      ...formValues.filter((item: any) => item.field !== 'dataType'),
    ];
    this.subscriptions.push(
      service.getCalculated(filters).subscribe({
        next: (data: any) => {
          this.originalData = data;
          this.data = this.parseData(this.originalData);
          this.setGraphOptions();
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  parseData(data: any): any {
    const result = { ...data };
    const optimalEntriesNumber =
      this.viewMode === 'PRIMARY' ? this.optimalEntriesNumber : this.optimalEntriesNumberWide;
    let entries = Object.entries(result);
    let ratio = Math.ceil(entries.length / optimalEntriesNumber) - 1;

    if (ratio < 2) {
      return result;
    }

    entries.forEach(([key, val]: [string, any]) => {
      if (!Object.keys(val).length) {
        delete result[key];
      }
    });
    entries = Object.entries(result);
    ratio = Math.ceil(entries.length / optimalEntriesNumber) - 1;

    if (ratio < 2) {
      return result;
    }

    for (let i = 0; i < entries.length; i += 1) {
      if (i % ratio !== 0) {
        delete result[entries[i][0]];
      }
    }

    return result;
  }

  onChartInit(event: ECharts) {
    this.chart = event;
    this.chart.on('mouseover', { seriesType: 'bar' }, (series) => {
      this.chart.setOption({
        tooltip: {
          backgroundColor:
            CHART_TOOLTIP_COLORS_MAP[series.seriesId as keyof typeof CHART_TOOLTIP_COLORS_MAP],
        },
      });
    });
  }

  setGraphOptions(): void {
    this.chartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        backgroundColor: 'rgba(50, 50, 50, 0.7)',
        textStyle: {
          color: '#ffffff',
        },
      },
      legend: {
        icon: 'circle',
        left: 30,
        itemGap: 16,
        textStyle: {
          fontFamily: CHART_LABEL_FONT_FAMILY,
          fontSize: CHART_LABEL_FONT_SIZE,
          color: CHART_LABEL_COLOR,
        },
      },
      grid: {
        top: 72,
        left: 56,
        right: 16,
        bottom: 72,
      },
      xAxis: [
        {
          type: 'category',
          data: this.getDataCategories(),
          axisLabel: {
            rotate: 60,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: this.translateService.instant('captions.dashboardNumberOfCases'),
          nameLocation: 'middle',
          nameRotate: 90,
          nameTextStyle: {
            fontFamily: CHART_LABEL_FONT_FAMILY,
            color: CHART_LABEL_COLOR,
            fontSize: 16,
            padding: [0, 0, 20, 0],
          },
        },
      ],
      series:
        this.form.value.dataType === 'CASE_STATUS'
          ? this.getDataCasesStatus()
          : this.getDataPresentCondition(),
    };
  }

  getDataCategories(): string[] {
    let categories;
    switch (this.form.value.epiCurveGrouping) {
      case 'WEEK':
        categories = Object.keys(this.data).map(
          (item) => `Wk ${format(new Date(item), WEEK_OF_YEAR_DATE_FORMAT)}`
        );
        break;
      case 'MONTH':
        categories = Object.keys(this.data).map((item) =>
          format(new Date(item), MONTH_MEDIUM_DATE_FORMAT)
        );
        break;
      default:
        categories = Object.keys(this.data).map((item) =>
          format(new Date(item), COMMON_DATE_FORMAT)
        );
        break;
    }
    return categories;
  }

  getDataCasesStatus(): any[] {
    return [
      {
        ...SERIES_OPTIONS,
        id: 'NOT_CLASSIFIED',
        name: this.translateService.instant('captions.dashboardNotYetClassified'),
        color: CASE_CLASIFICATION_COLORS_MAP.NOT_CLASSIFIED,
        data: Object.values(this.data).map((item) => item.NOT_CLASSIFIED),
      },
      {
        ...SERIES_OPTIONS,
        id: 'SUSPECT',
        name: this.translateService.instant('captions.dashboardSuspect'),
        color: CASE_CLASIFICATION_COLORS_MAP.SUSPECT,
        data: Object.values(this.data).map((item) => item.SUSPECT),
      },
      {
        ...SERIES_OPTIONS,
        id: 'PROBABLE',
        name: this.translateService.instant('captions.dashboardProbable'),
        color: CASE_CLASIFICATION_COLORS_MAP.PROBABLE,
        data: Object.values(this.data).map((item) => item.PROBABLE),
      },
      {
        ...SERIES_OPTIONS,
        id: 'CONFIRMED_UNKNOWN_SYMPTOMS',
        name: this.translateService.instant('captions.dashboardConfirmedUnknownSymptoms'),
        color: CASE_CLASIFICATION_COLORS_MAP.CONFIRMED_UNKNOWN_SYMPTOMS,
        data: Object.values(this.data).map((item) => item.CONFIRMED_UNKNOWN_SYMPTOMS),
      },
      {
        ...SERIES_OPTIONS,
        id: 'CONFIRMED_NO_SYMPTOMS',
        name: this.translateService.instant('captions.dashboardConfirmedNoSymptoms'),
        color: CASE_CLASIFICATION_COLORS_MAP.CONFIRMED_NO_SYMPTOMS,
        data: Object.values(this.data).map((item) => item.CONFIRMED_NO_SYMPTOMS),
      },
      {
        ...SERIES_OPTIONS,
        id: 'CONFIRMED',
        name: this.translateService.instant('captions.dashboardConfirmed'),
        color: CASE_CLASIFICATION_COLORS_MAP.CONFIRMED,
        data: Object.values(this.data).map((item) => item.CONFIRMED),
      },
    ];
  }

  getDataPresentCondition(): any[] {
    return [
      {
        ...SERIES_OPTIONS,
        id: 'ALIVE',
        name: this.translateService.instant('captions.dashboardAlive'),
        color: PRESENT_CONDITION_COLORS_MAP.ALIVE,
        data: Object.values(this.data).map((item) => item.ALIVE),
      },
      {
        ...SERIES_OPTIONS,
        id: 'DEAD',
        name: this.translateService.instant('captions.dashboardDead'),
        color: PRESENT_CONDITION_COLORS_MAP.DEAD,
        data: Object.values(this.data).map((item) => item.DEAD),
      },
      {
        ...SERIES_OPTIONS,
        id: 'UNKNOWN',
        name: this.translateService.instant('captions.dashboardUnknown'),
        color: PRESENT_CONDITION_COLORS_MAP.UNKNOWN,
        data: Object.values(this.data).map((item) => item.UNKNOWN),
      },
    ];
  }

  onViewChange(event: ViewOptions): void {
    this.viewMode = event;
    this.epiCurveViewUpdate.emit(event);
    this.data = this.parseData(this.originalData);
    this.setGraphOptions();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
