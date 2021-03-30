import { PrescriptionReferenceDto } from './prescriptionReferenceDto';
import { TherapyReferenceDto } from './therapyReferenceDto';
import { TreatmentRoute } from './treatmentRoute';
import { TreatmentType } from './treatmentType';
import { TypeOfDrug } from './typeOfDrug';

export interface TreatmentDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  therapy?: TherapyReferenceDto;
  treatmentDateTime?: Date;
  executingClinician?: string;
  treatmentType?: TreatmentType;
  treatmentDetails?: string;
  typeOfDrug?: TypeOfDrug;
  dose?: string;
  route?: TreatmentRoute;
  routeDetails?: string;
  additionalNotes?: string;
  prescription?: PrescriptionReferenceDto;
}
