import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  ComponentFactoryResolver,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ADD_MODAL_NARROW, ADD_MODAL_WIDE, BREAKPOINTS } from '../../../app.constants';
import { FormActionsService } from '../../../_services/form-actions.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnInit, OnDestroy {
  @ViewChild('addEditResource', { read: ViewContainerRef })
  addEditResource: ViewContainerRef;
  subscription: Subscription[] = [];
  modalWidth: string;

  constructor(
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    public breakpointObserver: BreakpointObserver,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private componentFactoryResolver: ComponentFactoryResolver,
    private formActionsService: FormActionsService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    console.log('init => ', this.data);
    // if (this.data.service) {
    //   this.subscription.push(
    //     this.data.service.getById(this.data.resource.uuid).subscribe({
    //       next: (response: any) => {
    //         this.data.resource = response;
    //         setTimeout(() => this.createComponent());
    //       },
    //       error: (err: any) => {
    //         this.notificationService.error(err);
    //       },
    //       complete: () => {},
    //     })
    //   );
    // } else {
    //   setTimeout(() => this.createComponent());
    // }
  }

  createComponent(): void {
    const resolver = this.componentFactoryResolver.resolveComponentFactory<any>(
      this.data.component
    );
    const createdComponent = this.addEditResource.createComponent(resolver);
    if (this.data.resource) {
      createdComponent.instance.selectedResource = this.data.resource;
    }
  }

  save(): void {
    if (this.data.resource) {
      this.formActionsService.setSave(this.data.resource);
    } else {
      this.formActionsService.setSave(null);
    }
  }

  discard(): void {
    this.formActionsService.setDiscard();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  archive(): void {}

  delete(): void {}

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
