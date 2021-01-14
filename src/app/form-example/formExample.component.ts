import { Component } from '@angular/core';
import { QuestionBase } from '../question-base';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-forms',
  templateUrl: './formExample.component.html',
  styleUrls: ['./formExample.component.scss'],
  providers: [QuestionService],
})
export class FormExampleComponent {
  questions: QuestionBase<any>[] = [];

  constructor(service: QuestionService) {
    service.getQuestions().subscribe({
      next: (value) => {
        this.questions = value;
      },
    });
  }
}
