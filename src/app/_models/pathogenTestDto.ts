import { Disease } from './disease';
import { FacilityReferenceDto } from './facilityReferenceDto';
import { PathogenTestResultType } from './pathogenTestResultType';
import { PathogenTestType } from './pathogenTestType';
import { SampleReferenceDto } from './sampleReferenceDto';
import { UserReferenceDto } from './userReferenceDto';

export interface PathogenTestDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  sample: SampleReferenceDto;
  testedDisease: Disease;
  testedDiseaseDetails?: string;
  typingId?: string;
  testType: PathogenTestType;
  testTypeText?: string;
  testDateTime: Date;
  lab: FacilityReferenceDto;
  labDetails?: string;
  labUser: UserReferenceDto;
  testResult: PathogenTestResultType;
  testResultText: string;
  testResultVerified: boolean;
  fourFoldIncreaseAntibodyTiter?: boolean;
  serotype?: string;
  cqValue?: number;
  reportDate?: Date;
}
