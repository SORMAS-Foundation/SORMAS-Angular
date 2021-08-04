import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-attachments',
  templateUrl: './card-attachments.component.html',
  styleUrls: ['./card-attachments.component.scss'],
})
export class CardAttachmentsComponent {
  @Input() data: any[] = [];
}
