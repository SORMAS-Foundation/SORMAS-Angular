import { ClassificationCriteriaDto } from './classificationCriteriaDto';
import { PathogenTestType } from './pathogenTestType';

export interface ClassificationPathogenTestPositiveResultCriteriaDto
  extends ClassificationCriteriaDto {
  pathogenTestTypes?: Array<PathogenTestType>;
  sampleTestTypes?: Array<PathogenTestType>;
}
