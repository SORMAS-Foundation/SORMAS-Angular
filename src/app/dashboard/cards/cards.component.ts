import { Component, OnInit } from '@angular/core';
import { DiseaseService } from '../../services/disease.service';
import { Disease } from '../../services/payloads/disease-reponse';
import { ApiError } from '../../shared/http/BaseDataService';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  diseases: Disease[] = [];
  errorMessage?: ApiError;

  constructor(private diseaseService: DiseaseService) {}

  ngOnInit(): void {
    this.diseaseService.getDiseaseData().subscribe({
      next: (diseases) => {
        this.diseases = diseases;
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
  }
}
