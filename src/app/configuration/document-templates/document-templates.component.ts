import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { POPULATION_IMPORT_MODAL_WIDTH } from '../../app.constants';
import { DocumentDto } from '../../_models/documentDto';
import { DocumentWorkflowType } from '../../_models/documentWorkflowType';
import { DocumentTemplateService } from '../../_services/api/document-template.service';
import { NotificationService } from '../../_services/notification.service';
import { UploadTemplateComponent } from './upload-template/upload-template.component';

@Component({
  selector: 'app-document-templates',
  templateUrl: './document-templates.component.html',
  styleUrls: ['./document-templates.component.scss'],
})
export class DocumentTemplatesComponent implements OnInit, OnDestroy {
  documents: any;
  documentWorkflow: string[] = Object.keys(DocumentWorkflowType);
  subscriptions: Subscription[] = [];

  constructor(
    private documentService: DocumentTemplateService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.documentService.getAll().subscribe({
        next: (response: any) => {
          this.documents = this.groupDocuments(response.elements);
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );
  }

  groupDocuments(list: DocumentDto[]): any {
    const result: any = {};
    this.documentWorkflow.forEach((workflow: string) => {
      result[workflow] = list.filter((item) => item.workflow === workflow);
    });
    return result;
  }

  openUploadModal(workflow: string): void {
    this.dialog.open(UploadTemplateComponent, {
      width: POPULATION_IMPORT_MODAL_WIDTH,
      data: { workflow },
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
