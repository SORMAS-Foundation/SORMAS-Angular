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

  constructor(
    public dialogRef: MatDialogRef<AddEditBaseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private componentFactoryResolver: ComponentFactoryResolver,
    private formActionsService: FormActionsService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      const resolver = this.componentFactoryResolver.resolveComponentFactory(this.data.component);
      this.addEditResource.createComponent(resolver);
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
  }

  save(): void {
    if (this.data.editResources) {
      this.formActionsService.setSave(this.data.editResources);
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

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
