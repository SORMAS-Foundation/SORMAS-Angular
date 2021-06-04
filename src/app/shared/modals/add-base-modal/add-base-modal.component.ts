import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-base-modal',
  templateUrl: './add-base-modal.component.html',
  styleUrls: ['./add-base-modal.component.scss']
})
export class AddBaseModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddBaseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log('aaaaa', this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
