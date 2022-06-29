import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
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
  DASHBOARD_EPIDEMIOLOGICAL_CURVE_TYPE,
  FOLLOW_UP_STATUS_COLORS_MAP,
  CONTACT_CLASSIFICATION_COLORS_MAP,
  FOLLOW_UP_UNTIL_COLORS_MAP,
  CHART_TOOLTIP_TEXT_COLORS_MAP,
} from '../../../app.constants';
import { Filter, ViewOptions } from '../../../_models/common';
import { DashboardEpiDataCaseClassificationService } from '../../../_services/api/dashboard-epi-data-case-classification.service';
import { DashboardEpiDataPresentConditionService } from '../../../_services/api/dashboard-epi-data-present-condition.service';
import { FilterService } from '../../../_services/filter.service';
import { NotificationService } from '../../../_services/notification.service';
import { DashboardEpiDataFollowUpStatusService } from '../../../_services/api/dashboard-epi-data-follow-up-status.service';
import { DashboardEpiDataContactClassificationService } from '../../../_services/api/dashboard-epi-data-contact-classification.service';
import { DashboardEpiDataFollowUpUntilService } from '../../../_services/api/dashboard-epi-data-follow-up-until.service';

const SERIES_OPTIONS = {
  type: 'bar',
  stack: 'Cases',
  emphasis: {
    focus: 'series',
  },
  barWidth: '100%',
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
  @Input() type: string;

  @Output() epiCurveViewUpdate: EventEmitter<ViewOptions> = new EventEmitter();

  data: any[] = [];
  originalData: any[] = [];
  filters: Filter[] = [];
  subscriptions: Subscription[] = [];
  chart: ECharts;
  chartOption: EChartsOption;
  form = new UntypedFormGroup({});
  viewMode: ViewOptions = 'PRIMARY';
  optimalEntriesNumber = 7;
  optimalEntriesNumberWide = 12;
  dashboardEpidemiologicalCurveType = DASHBOARD_EPIDEMIOLOGICAL_CURVE_TYPE;

  constructor(
    private epiDataCaseClassificationService: DashboardEpiDataCaseClassificationService,
    private epiDataPresentConditionService: DashboardEpiDataPresentConditionService,
    private epiDataFollowUpStatusService: DashboardEpiDataFollowUpStatusService,
    private epiDataContactClassificationService: DashboardEpiDataContactClassificationService,
    private epiDataFollowUpUntilService: DashboardEpiDataFollowUpUntilService,
    public filterService: FilterService,
    private notificationService: NotificationService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.watchFilters();
  }

  initForm(): void {
    this.form = new UntypedFormGroup({
      epiCurveGrouping: new UntypedFormControl('WEEK'),
      showMinimumEntries: new UntypedFormControl(true),
      dataType: new UntypedFormControl(
        this.type === DASHBOARD_EPIDEMIOLOGICAL_CURVE_TYPE.CASE ? 'CASE_STATUS' : 'FOLLOW_UP_STATUS'
      ),
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
    let service;
    if (this.type === DASHBOARD_EPIDEMIOLOGICAL_CURVE_TYPE.CASE) {
      service =
        this.form.value.dataType === 'CASE_STATUS'
          ? this.epiDataCaseClassificationService
          : this.epiDataPresentConditionService;
    } else {
      switch (this.form.value.dataType) {
        case 'FOLLOW_UP_STATUS':
          service = this.epiDataFollowUpStatusService;
          break;
        case 'CONTACT_CLASSIFICATION':
          service = this.epiDataContactClassificationService;
          break;
        case 'FOLLOW_UP_UNTIL':
          service = this.epiDataFollowUpUntilService;
          break;
        default:
          break;
      }
    }
    const formValues = Object.entries(this.form.value).map(([field, value]) => ({
      field,
      value,
    }));
    const filters = [
      ...this.filters.filter((item: any) => validFilters.includes(item.field)),
      ...formValues.filter((item: any) => item.field !== 'dataType'),
    ];
    this.subscriptions.push(
      // @ts-ignore
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
          textStyle: {
            color:
              CHART_TOOLTIP_TEXT_COLORS_MAP[
                series.seriesId as keyof typeof CHART_TOOLTIP_TEXT_COLORS_MAP
              ],
          },
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
      series: this.getSeries(),
    };
  }

  getSeries(): any[] {
    if (this.type === DASHBOARD_EPIDEMIOLOGICAL_CURVE_TYPE.CASE) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      return this.form.value.dataType === 'CASE_STATUS'
        ? this.getDataCasesStatus()
        : this.getDataPresentCondition();
    }

    switch (this.form.value.dataType) {
      case 'FOLLOW_UP_STATUS':
        return this.getDataFollowUpStatus();
      case 'CONTACT_CLASSIFICATION':
        return this.getDataContactClassification();
      case 'FOLLOW_UP_UNTIL':
        return this.getDataFollowUpUntil();
      default:
        break;
    }

    return [];
  }

  getDataCategories(): string[] {
    const categories: string[] = [];
    switch (this.form.value.epiCurveGrouping) {
      case 'WEEK':
        Object.keys(this.data).forEach((item) => {
          const date = new Date(item);
          if (date.getTime()) {
            categories.push(`Wk ${format(date, WEEK_OF_YEAR_DATE_FORMAT)}`);
          }
        });
        break;
      case 'MONTH':
        Object.keys(this.data).forEach((item) => {
          const date = new Date(item);
          if (date.getTime()) {
            categories.push(format(date, MONTH_MEDIUM_DATE_FORMAT));
          }
        });
        break;
      default:
        Object.keys(this.data).forEach((item) => {
          const date = new Date(item);
          if (date.getTime()) {
            categories.push(format(date, COMMON_DATE_FORMAT));
          }
        });
        break;
    }
    return categories;
  }

  getDataFollowUpUntil(): any[] {
    const values = Object.values(this.data).filter(Boolean);
    return [
      {
        ...SERIES_OPTIONS,
        id: 'F_U_UNTIL',
        name: this.translateService.instant('captions.dashboardFollowUpUntilShort'),
        color: FOLLOW_UP_UNTIL_COLORS_MAP.F_U_UNTIL,
        data: values.map((item) => item.F_U_UNTIL),
      },
    ];
  }

  getDataContactClassification(): any[] {
    const values = Object.values(this.data).filter(Boolean);
    return [
      {
        ...SERIES_OPTIONS,
        id: 'CONTACT_UNCONFIRMED',
        name: this.translateService.instant('captions.dashboardUnconfirmed'),
        color: CONTACT_CLASSIFICATION_COLORS_MAP.CONTACT_UNCONFIRMED,
        data: values.map((item) => item.CONTACT_UNCONFIRMED),
      },
      {
        ...SERIES_OPTIONS,
        id: 'CONTACT_CONFIRMED',
        name: this.translateService.instant('captions.dashboardConfirmed'),
        color: CONTACT_CLASSIFICATION_COLORS_MAP.CONTACT_CONFIRMED,
        data: values.map((item) => item.CONTACT_CONFIRMED),
      },
    ];
  }

  getDataFollowUpStatus(): any[] {
    const values = Object.values(this.data).filter(Boolean);
    return [
      {
        ...SERIES_OPTIONS,
        id: 'UNDER_F_U',
        name: this.translateService.instant('captions.dashboardUnderFollowUpShort'),
        color: FOLLOW_UP_STATUS_COLORS_MAP.UNDER_F_U,
        data: values.map((item) => item.UNDER_F_U),
      },
      {
        ...SERIES_OPTIONS,
        id: 'CANCELED_F_U',
        name: this.translateService.instant('captions.dashboardCanceledFollowUpShort'),
        color: FOLLOW_UP_STATUS_COLORS_MAP.CANCELED_F_U,
        data: values.map((item) => item.CANCELED_F_U),
      },
      {
        ...SERIES_OPTIONS,
        id: 'LOST_F_U',
        name: this.translateService.instant('captions.dashboardLostToFollowUpShort'),
        color: FOLLOW_UP_STATUS_COLORS_MAP.LOST_F_U,
        data: values.map((item) => item.LOST_F_U),
      },
      {
        ...SERIES_OPTIONS,
        id: 'COMPETED_F_U',
        name: this.translateService.instant('captions.dashboardCompletedFollowUpShort'),
        color: FOLLOW_UP_STATUS_COLORS_MAP.COMPETED_F_U,
        data: values.map((item) => item.COMPETED_F_U),
      },
      {
        ...SERIES_OPTIONS,
        id: 'CONVERTED_CASE',
        name: this.translateService.instant('captions.dashboardConvertedToCase'),
        color: FOLLOW_UP_STATUS_COLORS_MAP.CONVERTED_CASE,
        data: values.map((item) => item.CONVERTED_CASE),
      },
    ];
  }

  getDataCasesStatus(): any[] {
    const values = Object.values(this.data).filter(Boolean);
    return [
      {
        ...SERIES_OPTIONS,
        id: 'NOT_CLASSIFIED',
        name: this.translateService.instant('captions.dashboardNotYetClassified'),
        color: CASE_CLASIFICATION_COLORS_MAP.NOT_CLASSIFIED,
        data: values.map((item) => item.NOT_CLASSIFIED),
      },
      {
        ...SERIES_OPTIONS,
        id: 'SUSPECT',
        name: this.translateService.instant('captions.dashboardSuspect'),
        color: CASE_CLASIFICATION_COLORS_MAP.SUSPECT,
        data: values.map((item) => item.SUSPECT),
      },
      {
        ...SERIES_OPTIONS,
        id: 'PROBABLE',
        name: this.translateService.instant('captions.dashboardProbable'),
        color: CASE_CLASIFICATION_COLORS_MAP.PROBABLE,
        data: values.map((item) => item.PROBABLE),
      },
      {
        ...SERIES_OPTIONS,
        id: 'CONFIRMED_UNKNOWN_SYMPTOMS',
        name: this.translateService.instant('captions.dashboardConfirmedUnknownSymptoms'),
        color: CASE_CLASIFICATION_COLORS_MAP.CONFIRMED_UNKNOWN_SYMPTOMS,
        data: values.map((item) => item.CONFIRMED_UNKNOWN_SYMPTOMS),
      },
      {
        ...SERIES_OPTIONS,
        id: 'CONFIRMED_NO_SYMPTOMS',
        name: this.translateService.instant('captions.dashboardConfirmedNoSymptoms'),
        color: CASE_CLASIFICATION_COLORS_MAP.CONFIRMED_NO_SYMPTOMS,
        data: values.map((item) => item.CONFIRMED_NO_SYMPTOMS),
      },
      {
        ...SERIES_OPTIONS,
        id: 'CONFIRMED',
        name: this.translateService.instant('captions.dashboardConfirmed'),
        color: CASE_CLASIFICATION_COLORS_MAP.CONFIRMED,
        data: values.map((item) => item.CONFIRMED),
      },
    ];
  }

  getDataPresentCondition(): any[] {
    const values = Object.values(this.data).filter(Boolean);
    return [
      {
        ...SERIES_OPTIONS,
        id: 'ALIVE',
        name: this.translateService.instant('captions.dashboardAlive'),
        color: PRESENT_CONDITION_COLORS_MAP.ALIVE,
        data: values.map((item) => item.ALIVE),
      },
      {
        ...SERIES_OPTIONS,
        id: 'DEAD',
        name: this.translateService.instant('captions.dashboardDead'),
        color: PRESENT_CONDITION_COLORS_MAP.DEAD,
        data: values.map((item) => item.DEAD),
      },
      {
        ...SERIES_OPTIONS,
        id: 'UNKNOWN',
        name: this.translateService.instant('captions.dashboardUnknown'),
        color: PRESENT_CONDITION_COLORS_MAP.UNKNOWN,
        data: values.map((item) => item.UNKNOWN),
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
