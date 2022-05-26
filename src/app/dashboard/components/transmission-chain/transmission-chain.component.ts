import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EChartsOption } from 'echarts';
import { Subscription } from 'rxjs';
import {
  PATH_ICON_ARROW_RIGHT_ALT,
  PATH_ICON_CACHED,
  PATH_ICON_HEALTH_AND_SAFETY,
  PATH_ICON_NEW_RELEASES,
  PATH_ICON_PERSON_SEARCH,
  PATH_ICON_QUEUE,
  PATH_ICON_SENTIMENT_SATISFIED_ALT,
  PATH_ICON_SICK,
} from '../../../app.constants';
import { Filter } from '../../../_models/common';
import { DashboardTransmissionChainService } from '../../../_services/api/dashboard-transmission-chain.service';
import { FilterService } from '../../../_services/filter.service';

@Component({
  selector: 'app-transmission-chain',
  templateUrl: './transmission-chain.component.html',
  styleUrls: ['./transmission-chain.component.scss'],
})
export class TransmissionChainComponent implements OnInit, OnDestroy {
  filters: Filter[] = [];
  data: any;
  chartOption: EChartsOption;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private filterService: FilterService,
    private transmissionChainService: DashboardTransmissionChainService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.filterService.getFilters().subscribe((response) => {
        this.filters = response.filters;
        this.fetchData();
      })
    );
  }

  fetchData(): void {
    this.subscriptions.add(
      this.transmissionChainService.getCalculated(this.filters).subscribe((data: any) => {
        this.data = data;
        this.setChartOptions();
      })
    );
  }

  get categories(): any {
    return [
      {
        id: 0,
        name: this.translateService.instant('strings.DiseaseNetworkDiagram.Classification.HEALTHY'),
        icon: `path://${PATH_ICON_HEALTH_AND_SAFETY}`,
        color: '#0ac73c',
      },
      {
        id: 1,
        name: this.translateService.instant('enum.CaseClassification.NOT_CLASSIFIED'),
        icon: `path://${PATH_ICON_CACHED}`,
        color: '#6d798c',
      },
      {
        id: 2,
        name: this.translateService.instant('enum.CaseClassification.SUSPECT'),
        icon: `path://${PATH_ICON_PERSON_SEARCH}`,
        color: '#fdd926',
      },
      {
        id: 3,
        name: this.translateService.instant('enum.CaseClassification.PROBABLE'),
        icon: `path://${PATH_ICON_QUEUE}`,
        color: '#fda312',
      },
      {
        id: 4,
        name: this.translateService.instant('enum.CaseClassification.CONFIRMED'),
        icon: `path://${PATH_ICON_NEW_RELEASES}`,
        color: '#d90000',
      },
      {
        id: 5,
        name: this.translateService.instant('enum.CaseClassification.CONFIRMED_NO_SYMPTOMS'),
        icon: `path://${PATH_ICON_SENTIMENT_SATISFIED_ALT}`,
        color: '#ff8080',
      },
      {
        id: 6,
        name: this.translateService.instant('enum.CaseClassification.CONFIRMED_UNKNOWN_SYMPTOMS'),
        icon: `path://${PATH_ICON_SICK}`,
        color: '#800000',
      },
      {
        id: 7,
        name: this.translateService.instant('strings.DiseaseNetworkDiagram.lowRisk'),
        icon: `path://${PATH_ICON_ARROW_RIGHT_ALT}`,
        color: '#2b323d',
      },
      {
        id: 8,
        name: this.translateService.instant('strings.DiseaseNetworkDiagram.highRisk'),
        icon: `path://${PATH_ICON_ARROW_RIGHT_ALT}`,
        color: '#ff5959',
      },
    ];
  }

  get diagramData(): any {
    return this.data.nodes.map((node: any) => {
      const category = this.categories.find((item: any) => item.id === node.category);
      return {
        symbol: category.icon,
        symbolSize: 18,
        symbolKeepAspect: true,
        itemStyle: {
          color: category.color,
        },
        ...node,
      };
    });
  }

  get diagramCategories(): any {
    return this.categories.map((category: any) => ({
      name: category.name,
      icon: category.icon,
      itemStyle: {
        color: category.color,
      },
    }));
  }

  get diagramLinks(): any {
    return this.data.links.map((link: any) => {
      const source = this.data.nodes[link.source];
      const category = this.categories.find((item: any) => item.id === source?.category);
      return {
        lineStyle: {
          width: 1,
          opacity: 1,
          color: category.id === 4 ? '#ff5959' : '#2b323d',
        },
        ...link,
      };
    });
  }

  setChartOptions(): void {
    this.chartOption = {
      legend: {
        left: 'left',
        itemWidth: 18,
        itemHeight: 18,
        backgroundColor: '#fff',
        data: this.diagramCategories,
      },
      series: [
        {
          type: 'graph',
          layout: 'force',
          animation: false,
          label: {
            position: 'right',
            formatter: '{b}',
          },
          draggable: true,
          roam: true,
          data: this.diagramData,
          categories: this.diagramCategories,
          force: {
            edgeLength: 32,
            repulsion: 24,
            gravity: 0.1,
            friction: 0.6,
          },
          edges: this.diagramLinks,
        },
      ],
    };
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
