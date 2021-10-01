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

@Component({
  selector: 'app-add-edit-base-modal',
  templateUrl: './add-edit-base-modal.component.html',
  styleUrls: ['./add-edit-base-modal.component.scss'],
})
export class AddEditBaseModalComponent implements OnInit, OnDestroy {
  @ViewChild('addEditResource', { read: ViewContainerRef })
  addEditResource: ViewContainerRef;
  subscription: Subscription[] = [];
  modalWidth: string;

  constructor(
    public dialogRef: MatDialogRef<AddEditBaseModalComponent>,
    public breakpointObserver: BreakpointObserver,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private componentFactoryResolver: ComponentFactoryResolver,
    private formActionsService: FormActionsService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      const resolver = this.componentFactoryResolver.resolveComponentFactory(this.data.component);
      const createdComponent = this.addEditResource.createComponent(resolver);
      if (this.data.resource) {
        // @ts-ignore
        createdComponent.instance.selectedResource = this.data.resource;
      }
    });

    this.subscription.push(
      this.formActionsService.getCloseFormModal().subscribe((response: any) => {
        if (response.closeModal) {
          this.dialogRef.close({
            close: true,
          });
        }
      })
    );

    this.subscription.push(
      this.breakpointObserver.observe([`(min-width: ${BREAKPOINTS.md}px)`]).subscribe((state) => {
        this.modalWidth = state.matches ? ADD_MODAL_WIDE : ADD_MODAL_NARROW;
        if (this.dialogRef) {
          this.dialogRef.updateSize(this.modalWidth);
        }
      })
    );
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
