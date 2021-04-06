import { Vaccination } from './vaccination';
import { VaccinationInfoSource } from './vaccinationInfoSource';
import { Vaccine } from './vaccine';
import { VaccineManufacturer } from './vaccineManufacturer';

export interface VaccinationInfoDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  vaccination?: Vaccination;
  vaccinationDoses?: string;
  firstVaccinationDate?: Date;
  lastVaccinationDate?: Date;
  vaccinationInfoSource?: VaccinationInfoSource;
  vaccineName?: Vaccine;
  otherVaccineName?: string;
  vaccineManufacturer?: VaccineManufacturer;
  otherVaccineManufacturer?: string;
  vaccineInn?: string;
  vaccineBatchNumber?: string;
  vaccineUniiCode?: string;
  vaccineAtcCode?: string;
}
