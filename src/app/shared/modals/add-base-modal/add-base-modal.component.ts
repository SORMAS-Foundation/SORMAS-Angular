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
  selector: 'app-add-base-modal',
  templateUrl: './add-base-modal.component.html',
  styleUrls: ['./add-base-modal.component.scss'],
})
export class AddBaseModalComponent implements OnInit {
  @ViewChild('addResource', { read: ViewContainerRef })
  addResource: ViewContainerRef;

  constructor(
    public dialogRef: MatDialogRef<AddBaseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private componentFactoryResolver: ComponentFactoryResolver,
    private formActionsService: FormActionsService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      const resolver = this.componentFactoryResolver.resolveComponentFactory(this.data.component);
      this.addResource.createComponent(resolver);
    });
  }

  save(): void {
    this.formActionsService.setSave(null);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
