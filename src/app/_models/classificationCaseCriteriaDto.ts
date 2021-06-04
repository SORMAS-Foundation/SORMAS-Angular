import { ClassificationCriteriaDto } from './classificationCriteriaDto';

export interface ClassificationCaseCriteriaDto extends ClassificationCriteriaDto {
  propertyId?: string;
  propertyValues?: Array<any>;
}
