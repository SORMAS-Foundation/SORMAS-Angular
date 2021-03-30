import { ClinicalCourseReferenceDto } from './clinicalCourseReferenceDto';
import { Disease } from './disease';
import { SymptomsDto } from './symptomsDto';

export interface ClinicalVisitDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  clinicalCourse?: ClinicalCourseReferenceDto;
  symptoms?: SymptomsDto;
  disease?: Disease;
  visitDateTime?: Date;
  visitingPerson?: string;
  visitRemarks?: string;
}
