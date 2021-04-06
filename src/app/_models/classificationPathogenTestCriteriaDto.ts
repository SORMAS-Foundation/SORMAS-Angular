import { ClassificationCaseCriteriaDto } from './classificationCaseCriteriaDto';
import { PathogenTestType } from './pathogenTestType';

export interface ClassificationPathogenTestCriteriaDto extends ClassificationCaseCriteriaDto {
  testTypes?: Array<PathogenTestType>;
}
