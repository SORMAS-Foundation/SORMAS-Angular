import { ClassificationCriteriaDto } from './classificationCriteriaDto';

export interface ClassificationAllOfCriteriaDto extends ClassificationCriteriaDto {
  drawSubCriteriaTogether?: boolean;
  subCriteria?: Array<ClassificationCriteriaDto>;
  criteriaName?: string;
}
