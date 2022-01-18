import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { format } from 'date-fns';
import { EChartsOption } from 'echarts';
import { Subscription } from 'rxjs';
import {
  CASE_CLASIFICATION_COLORS_MAP,
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

@Component({
  selector: 'app-dashboard-epidemiological-curve',
  templateUrl: './dashboard-epidemiological-curve.component.html',
  styleUrls: ['./dashboard-epidemiological-curve.component.scss'],
})
export class DashboardEpidemiologicalCurveComponent implements OnInit, OnDestroy {
  @Output() epiCurveViewUpdate: EventEmitter<ViewOptions> = new EventEmitter();

  data: any[] = [];
  filters: Filter[] = [];
  subscriptions: Subscription[] = [];
  chartOption: EChartsOption;
  form = new FormGroup({});

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
          this.data = data;
          this.setGraphOptions();
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  setGraphOptions(): void {
    this.chartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        backgroundColor: 'rgba(255, 89, 89, 0.8)',
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
        left: 48,
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
            fontSize: 17,
            lineHeight: 32,
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
        name: this.translateService.instant('captions.dashboardNotYetClassified'),
        type: 'bar',
        stack: 'Cases',
        color: CASE_CLASIFICATION_COLORS_MAP.NOT_YET_CLASSIFIED,
        emphasis: {
          focus: 'series',
        },
        data: Object.values(this.data).map((item) => item.NOT_CLASSIFIED),
        barWidth: 30,
      },
      {
        name: this.translateService.instant('captions.dashboardSuspect'),
        type: 'bar',
        stack: 'Cases',
        color: CASE_CLASIFICATION_COLORS_MAP.SUSPECT,
        emphasis: {
          focus: 'series',
        },
        data: Object.values(this.data).map((item) => item.SUSPECT),
      },
      {
        name: this.translateService.instant('captions.dashboardProbable'),
        type: 'bar',
        stack: 'Cases',
        color: CASE_CLASIFICATION_COLORS_MAP.PROBABLE,
        emphasis: {
          focus: 'series',
        },
        data: Object.values(this.data).map((item) => item.PROBABLE),
      },
      {
        name: this.translateService.instant('captions.dashboardConfirmedUnknownSymptoms'),
        type: 'bar',
        stack: 'Cases',
        color: CASE_CLASIFICATION_COLORS_MAP.CONFIRMED_UNKNOWN_SYMPTOMS,
        emphasis: {
          focus: 'series',
        },
        data: Object.values(this.data).map((item) => item.CONFIRMED_UNKNOWN_SYMPTOMS),
      },
      {
        name: this.translateService.instant('captions.dashboardConfirmedNoSymptoms'),
        type: 'bar',
        stack: 'Cases',
        color: CASE_CLASIFICATION_COLORS_MAP.CONFIRMED_NO_SYMPTOMS,
        emphasis: {
          focus: 'series',
        },
        data: Object.values(this.data).map((item) => item.CONFIRMED_NO_SYMPTOMS),
      },
      {
        name: this.translateService.instant('captions.dashboardConfirmed'),
        type: 'bar',
        stack: 'Cases',
        color: CASE_CLASIFICATION_COLORS_MAP.CONFIRMED,
        emphasis: {
          focus: 'series',
        },
        data: Object.values(this.data).map((item) => item.CONFIRMED),
      },
    ];
  }

  getDataPresentCondition(): any[] {
    return [
      {
        name: this.translateService.instant('captions.dashboardAlive'),
        type: 'bar',
        stack: 'Cases',
        color: PRESENT_CONDITION_COLORS_MAP.ALIVE,
        emphasis: {
          focus: 'series',
        },
        data: Object.values(this.data).map((item) => item.ALIVE),
        barWidth: 30,
      },
      {
        name: this.translateService.instant('captions.dashboardDead'),
        type: 'bar',
        stack: 'Cases',
        color: PRESENT_CONDITION_COLORS_MAP.DEAD,
        emphasis: {
          focus: 'series',
        },
        data: Object.values(this.data).map((item) => item.DEAD),
        barWidth: 30,
      },
      {
        name: this.translateService.instant('captions.dashboardUnknown'),
        type: 'bar',
        stack: 'Cases',
        color: PRESENT_CONDITION_COLORS_MAP.UNKNOWN,
        emphasis: {
          focus: 'series',
        },
        data: Object.values(this.data).map((item) => item.UNKNOWN),
        barWidth: 30,
      },
    ];
  }

  onViewChange(event: ViewOptions): void {
    this.epiCurveViewUpdate.emit(event);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
