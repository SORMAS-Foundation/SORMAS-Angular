import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import {
  EDGE_PANEL_INITIAL_SIZE_SINGLE_COLUMN,
  EDGE_PANEL_INITIAL_SIZE_DOUBLE_COLUMN,
  EDGE_PANEL_TYPE,
  EdgePanelType,
  BREAKPOINTS,
  Position,
  ADD_MODAL_MAX_WIDTH,
  MODAL_NARROW_WIDTH,
} from '../../app.constants';
import { PANEL_CONFIG } from './edge-panel-config-data';
import { BaseService } from '../../_services/api/base.service';
import { NotificationService } from '../../_services/notification.service';
import { PositionType } from '../../_models/positionType';
import { AddEditBaseModalComponent } from '../modals/add-edit-base-modal/add-edit-base-modal.component';
import { VaccinationAddComponent } from '../vaccination-add/vaccination-add.component';
import { DocumentTemplateCreateComponent } from '../document-template-create/document-template-create.component';

@Component({
  selector: 'app-edge-panel',
  templateUrl: './edge-panel.component.html',
  styleUrls: ['./edge-panel.component.scss'],
})
export class EdgePanelComponent implements OnInit, OnDestroy {
  @Input() resourceService: BaseService<any>;
  @Input() data: any;
  @Input() scopeId: string | undefined;
  @Input() type: EdgePanelType = EDGE_PANEL_TYPE.TASK;
  @Input() filterCriteriaEntity?: string;
  @Input() cardCollapse: boolean;
  @Input() showGroupLink = false;
  @Input() actionLink = '';
  @Input() actionLinkParams = {};
  @Input() cardWidth?: number;
  @Input() showCheckBoxFilter: boolean;
  @Input() cardEdit = true;
  @Input() cardEditPosition: PositionType = Position.BOTTOMRIGHT;

  @Output() addItem: EventEmitter<any> = new EventEmitter();

  items: any[] = [];
  initialSize: number;
  config: any;
  subscriptions: Subscription[] = [];
  loadResource = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    const filters = [
      {
        field: this.filterCriteriaEntity || 'caze',
        value: {
          uuid: this.scopeId,
        },
      },
    ];

    this.config = PANEL_CONFIG[this.type];
    if (this.resourceService) {
      this.loadResource = true;
      this.subscriptions.push(
        this.resourceService?.getAll(null, null, filters).subscribe({
          next: (response: any) => {
            this.items = response.elements;
            this.loadResource = false;
          },
          error: (err: any) => {
            this.notificationService.error(err);
            this.loadResource = false;
          },
          complete: () => {},
        })
      );
    } else {
      this.items = this.data;
    }

    this.subscriptions.push(
      this.breakpointObserver
        .observe([`(max-width: ${BREAKPOINTS.lg}px)`, `(min-width: ${BREAKPOINTS.xxl}px)`])
        .subscribe((state) => {
          this.initialSize = state.matches
            ? EDGE_PANEL_INITIAL_SIZE_DOUBLE_COLUMN
            : EDGE_PANEL_INITIAL_SIZE_SINGLE_COLUMN;
        })
    );
  }

  create(): void {
    switch (this.type) {
      case EDGE_PANEL_TYPE.VACCINATION:
        this.addVaccination();
        break;
      case EDGE_PANEL_TYPE.DOCUMENT_TEMPLATE:
        this.createDocumentTemplate();
        break;
      default:
        this.addItem.emit();
        break;
    }
  }

  addVaccination(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('strings.headingVaccination'),
        component: VaccinationAddComponent,
      },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }

  createDocumentTemplate(): void {
    const dialogRef = this.dialog.open(DocumentTemplateCreateComponent, {
      width: MODAL_NARROW_WIDTH,
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
