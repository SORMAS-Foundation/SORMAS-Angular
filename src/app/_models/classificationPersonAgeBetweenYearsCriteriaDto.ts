import { ClassificationCriteriaDto } from './classificationCriteriaDto';

export interface ClassificationPersonAgeBetweenYearsCriteriaDto extends ClassificationCriteriaDto {
  lowerThreshold?: number;
  upperThreshold?: number;
}
