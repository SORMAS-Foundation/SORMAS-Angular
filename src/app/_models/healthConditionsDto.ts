import { YesNoUnknown } from './yesNoUnknown';

export interface HealthConditionsDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  tuberculosis?: YesNoUnknown;
  asplenia?: YesNoUnknown;
  hepatitis?: YesNoUnknown;
  diabetes?: YesNoUnknown;
  hiv?: YesNoUnknown;
  hivArt?: YesNoUnknown;
  chronicLiverDisease?: YesNoUnknown;
  malignancyChemotherapy?: YesNoUnknown;
  chronicHeartFailure?: YesNoUnknown;
  chronicPulmonaryDisease?: YesNoUnknown;
  chronicKidneyDisease?: YesNoUnknown;
  chronicNeurologicCondition?: YesNoUnknown;
  downSyndrome?: YesNoUnknown;
  congenitalSyphilis?: YesNoUnknown;
  immunodeficiencyOtherThanHiv?: YesNoUnknown;
  cardiovascularDiseaseIncludingHypertension?: YesNoUnknown;
  obesity?: YesNoUnknown;
  currentSmoker?: YesNoUnknown;
  formerSmoker?: YesNoUnknown;
  asthma?: YesNoUnknown;
  sickleCellDisease?: YesNoUnknown;
  immunodeficiencyIncludingHiv?: YesNoUnknown;
  otherConditions?: string;
}
