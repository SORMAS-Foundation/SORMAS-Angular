import { ClassificationCriteriaDto } from './classificationCriteriaDto';
import { Disease } from './disease';

export interface DiseaseClassificationCriteriaDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  disease?: Disease;
  suspectCriteria?: ClassificationCriteriaDto;
  probableCriteria?: ClassificationCriteriaDto;
  confirmedCriteria?: ClassificationCriteriaDto;
  notACaseCriteria?: ClassificationCriteriaDto;
}
