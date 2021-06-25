import { Component, Input } from '@angular/core';
import { DateCardType } from '../../../_constants/enums';
import { TaskDto } from '../../../_models/taskDto';

@Component({
  selector: 'app-card-case-task',
  templateUrl: './card-case-task.component.html',
  styleUrls: ['./card-case-task.component.scss'],
})
export class CardCaseTaskComponent {
  @Input() data: TaskDto;

  dateCardType = DateCardType;
}
