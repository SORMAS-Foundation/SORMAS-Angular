import { HospitalizationReasonType } from './hospitalizationReasonType';
import { PreviousHospitalizationDto } from './previousHospitalizationDto';
import { YesNoUnknown } from './yesNoUnknown';

export interface HospitalizationDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  admittedToHealthFacility?: YesNoUnknown;
  admissionDate?: Date;
  dischargeDate?: Date;
  isolated?: YesNoUnknown;
  isolationDate?: Date;
  leftAgainstAdvice?: YesNoUnknown;
  hospitalizedPreviously?: YesNoUnknown;
  previousHospitalizations?: Array<PreviousHospitalizationDto>;
  intensiveCareUnit?: YesNoUnknown;
  intensiveCareUnitStart?: Date;
  intensiveCareUnitEnd?: Date;
  hospitalizationReason?: HospitalizationReasonType;
  otherHospitalizationReason?: string;
}
