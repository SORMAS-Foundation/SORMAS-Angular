import { CommunityReferenceDto } from './communityReferenceDto';
import { DistrictReferenceDto } from './districtReferenceDto';
import { RegionReferenceDto } from './regionReferenceDto';
import { YesNoUnknown } from './yesNoUnknown';

export interface MaternalHistoryDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  childrenNumber?: number;
  ageAtBirth?: number;
  conjunctivitis?: YesNoUnknown;
  conjunctivitisOnset?: Date;
  conjunctivitisMonth?: number;
  maculopapularRash?: YesNoUnknown;
  maculopapularRashOnset?: Date;
  maculopapularRashMonth?: number;
  swollenLymphs?: YesNoUnknown;
  swollenLymphsOnset?: Date;
  swollenLymphsMonth?: number;
  arthralgiaArthritis?: YesNoUnknown;
  arthralgiaArthritisOnset?: Date;
  arthralgiaArthritisMonth?: number;
  otherComplications?: YesNoUnknown;
  otherComplicationsOnset?: Date;
  otherComplicationsMonth?: number;
  otherComplicationsDetails?: string;
  rubella?: YesNoUnknown;
  rubellaOnset?: Date;
  rashExposure?: YesNoUnknown;
  rashExposureDate?: Date;
  rashExposureMonth?: number;
  rashExposureRegion?: RegionReferenceDto;
  rashExposureDistrict?: DistrictReferenceDto;
  rashExposureCommunity?: CommunityReferenceDto;
}
