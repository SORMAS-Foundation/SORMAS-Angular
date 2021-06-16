import {
  Component,
  ComponentFactoryResolver,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormActionsService } from '../../../_services/form-actions.service';

@Component({
  selector: 'app-add-edit-base-modal',
  templateUrl: './add-edit-base-modal.component.html',
  styleUrls: ['./add-edit-base-modal.component.scss'],
})
export class AddEditBaseModalComponent implements OnInit {
  @ViewChild('addEditResource', { read: ViewContainerRef })
  addEditResource: ViewContainerRef;

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
  }

  save(): void {
    this.formActionsService.setSave(null);
  }

  discard(): void {
    this.formActionsService.setDiscard();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
