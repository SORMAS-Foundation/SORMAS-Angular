import { Component, Input, OnInit } from '@angular/core';
import { Disease, IconsMap } from '../../../app.constants';

@Component({
  selector: 'app-card-disease',
  templateUrl: './card-disease.component.html',
  styleUrls: ['./card-disease.component.scss'],
})
export class CardDiseaseComponent implements OnInit {
  @Input() data: any;

  disease: string;
  progress: string;
  icon: string;

  ngOnInit(): void {
    this.disease = Disease[this.data.disease as keyof typeof Disease];
    if (this.data.caseCount || this.data.previousCaseCount) {
      if (this.data.caseCount > this.data.previousCaseCount) {
        this.progress = 'rising';
      } else if (this.data.caseCount < this.data.previousCaseCount) {
        this.progress = 'falling';
      } else {
        this.progress = 'stagnant';
      }
      this.icon = IconsMap[this.progress.toUpperCase() as keyof typeof IconsMap];
    }
  }
}
