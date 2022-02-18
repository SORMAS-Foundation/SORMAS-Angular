import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-share-reject',
  templateUrl: './share-reject.component.html',
  styleUrls: ['./share-reject.component.scss'],
})
export class ShareRejectComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      comment: new FormControl(),
    });
  }

  acceptRequest(): void {
    // accept logic here
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
