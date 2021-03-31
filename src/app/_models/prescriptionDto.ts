import { TherapyReferenceDto } from './therapyReferenceDto';
import { TreatmentRoute } from './treatmentRoute';
import { TreatmentType } from './treatmentType';
import { TypeOfDrug } from './typeOfDrug';

export interface PrescriptionDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  therapy?: TherapyReferenceDto;
  prescriptionDate?: Date;
  prescriptionStart?: Date;
  prescriptionEnd?: Date;
  prescribingClinician?: string;
  prescriptionType?: TreatmentType;
  prescriptionDetails?: string;
  typeOfDrug?: TypeOfDrug;
  frequency?: string;
  dose?: string;
  route?: TreatmentRoute;
  routeDetails?: string;
  additionalNotes?: string;
}
