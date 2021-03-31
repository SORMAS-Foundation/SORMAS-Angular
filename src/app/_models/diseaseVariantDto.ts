import { Disease } from './disease';

export interface DiseaseVariantDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  disease?: Disease;
  name?: string;
}
