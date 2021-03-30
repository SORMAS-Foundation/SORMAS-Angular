import { HealthConditionsDto } from './healthConditionsDto';

export interface ClinicalCourseDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  healthConditions?: HealthConditionsDto;
}
