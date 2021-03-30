import { ClassificationCriteriaDto } from './classificationCriteriaDto';

export interface ClassificationXOfCriteriaDto extends ClassificationCriteriaDto {
  requiredAmount?: number;
  criteriaName?: string;
}
