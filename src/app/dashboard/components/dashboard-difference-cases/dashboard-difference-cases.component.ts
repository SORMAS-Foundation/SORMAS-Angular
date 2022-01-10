import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { format, isSameDay } from 'date-fns';
import { EChartsOption } from 'echarts';
import {
  BARCHART_NEGATIVE_BAR_CATEGORY_GAP,
  BARCHART_NEGATIVE_BAR_WIDTH,
  BARCHART_NEGATIVE_GRID_BOTTOM,
  BARCHART_NEGATIVE_GRID_LEFT,
  BARCHART_NEGATIVE_GRID_RIGHT,
  BARCHART_NEGATIVE_GRID_TOP,
  BARCHART_NEGATIVE_LABEL_WIDTH,
  CHART_AXIS_LINE_COLOR,
  CHART_AXIS_LINE_WIDTH,
  CHART_LABEL_COLOR,
  CHART_LABEL_FONT_FAMILY,
  CHART_LABEL_FONT_SIZE,
  CHART_LABEL_FONT_WEIGHT,
  CHART_SPLIT_LINE_COLOR,
  CHART_SPLIT_LINE_WIDTH,
  COMMON_DATE_FORMAT,
  DISEASES_COLORS_MAP,
} from '../../../app.constants';
import { Filter } from '../../../_models/common';

@Component({
  selector: 'app-dashboard-difference-cases',
  templateUrl: './dashboard-difference-cases.component.html',
  styleUrls: ['./dashboard-difference-cases.component.scss'],
})
export class DashboardDifferenceCasesComponent {
  private _data: any[];
  @Input() set data(raw: any[]) {
    this._data = raw;
    this.setGraphOptions();
  }
  get data(): any[] {
    return this._data;
  }

  private _filters: Filter[];
  @Input() set filters(raw: Filter[]) {
    this._filters = raw;
    this.setPeriod();
  }
  get filters(): Filter[] {
    return this._filters;
  }

  period: string;
  previousPeriod: string;
  colorMap: any = DISEASES_COLORS_MAP;
  canvasHeight: number;

  chartOption: EChartsOption;

  constructor(private translateService: TranslateService) {}

  setPeriod(): void {
    const dateFrom = this.filters.find((item) => item.field === 'dateFrom')?.value;
    const dateTo = this.filters.find((item) => item.field === 'dateTo')?.value;
    const previousDateFrom = this.filters.find((item) => item.field === 'previousDateFrom')?.value;
    const previousDateTo = this.filters.find((item) => item.field === 'previousDateTo')?.value;
    this.period =
      !dateTo || isSameDay(dateFrom, dateTo)
        ? format(dateFrom, COMMON_DATE_FORMAT)
        : `${format(dateFrom, COMMON_DATE_FORMAT)} - ${format(dateTo, COMMON_DATE_FORMAT)}`;
    this.previousPeriod =
      !previousDateTo || isSameDay(previousDateFrom, previousDateTo)
        ? format(previousDateFrom, COMMON_DATE_FORMAT)
        : `${format(previousDateFrom, COMMON_DATE_FORMAT)} - ${format(
            previousDateTo,
            COMMON_DATE_FORMAT
          )}`;
  }

  setGraphOptions(): void {
    const values = this.data.map((item) => Math.abs(item.casesDifference));
    const maxDifference = Math.max(...values);
    const base = 10 ** (maxDifference.toString().length - 1);
    const interval = Math.max(base, 10) / 2;
    const limit = Math.ceil(maxDifference / interval) * interval;
    const graphHeight =
      (BARCHART_NEGATIVE_BAR_WIDTH + BARCHART_NEGATIVE_BAR_CATEGORY_GAP) * this.data.length;
    this.canvasHeight = graphHeight + BARCHART_NEGATIVE_GRID_TOP + BARCHART_NEGATIVE_GRID_BOTTOM;
    this.chartOption = {
      grid: {
        top: BARCHART_NEGATIVE_GRID_TOP,
        right: BARCHART_NEGATIVE_GRID_RIGHT,
        bottom: BARCHART_NEGATIVE_GRID_BOTTOM,
        left: BARCHART_NEGATIVE_GRID_LEFT + BARCHART_NEGATIVE_LABEL_WIDTH,
        height: graphHeight,
      },
      xAxis: {
        type: 'value',
        min: -limit,
        max: limit,
        interval: Math.min(base, interval),
        splitLine: {
          show: true,
          lineStyle: {
            color: CHART_SPLIT_LINE_COLOR,
            width: CHART_SPLIT_LINE_WIDTH,
          },
        },
      },
      yAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: CHART_AXIS_LINE_COLOR,
            width: CHART_AXIS_LINE_WIDTH,
          },
        },
        axisLabel: {
          show: true,
          width: BARCHART_NEGATIVE_LABEL_WIDTH,
          color: CHART_LABEL_COLOR,
          fontWeight: CHART_LABEL_FONT_WEIGHT,
          fontSize: CHART_LABEL_FONT_SIZE,
          fontFamily: CHART_LABEL_FONT_FAMILY,
        },
        axisTick: { show: false },
        data: this.data.map((item) =>
          this.translateService.instant(`enum.Disease.${item.disease}`)
        ),
      },
      series: [
        {
          name: 'Cost',
          type: 'bar',
          barWidth: BARCHART_NEGATIVE_BAR_WIDTH,
          barCategoryGap: BARCHART_NEGATIVE_BAR_CATEGORY_GAP,
          roundCap: true,
          data: this.data.map((item) => ({
            value: item.casesDifference,
            itemStyle: {
              color: this.colorMap[item.disease],
              borderRadius: item.casesDifference > 0 ? [0, 4, 4, 0] : [4, 0, 0, 4],
            },
          })),
        },
      ],
    };
  }
}
