import { ClassificationCaseCriteriaDto } from './classificationCaseCriteriaDto';

export interface ClassificationNotInStartDateRangeCriteriaDto
  extends ClassificationCaseCriteriaDto {
  daysBeforeStartDate?: number;
}
