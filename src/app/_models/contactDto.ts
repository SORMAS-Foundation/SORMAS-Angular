/**
 * SORMAS REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.64.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CaseReferenceDto } from './caseReferenceDto';
import { CommunityReferenceDto } from './communityReferenceDto';
import { ContactCategory } from './contactCategory';
import { ContactClassification } from './contactClassification';
import { ContactIdentificationSource } from './contactIdentificationSource';
import { ContactProximity } from './contactProximity';
import { ContactRelation } from './contactRelation';
import { ContactStatus } from './contactStatus';
import { Disease } from './disease';
import { DiseaseVariant } from './diseaseVariant';
import { DistrictReferenceDto } from './districtReferenceDto';
import { EndOfQuarantineReason } from './endOfQuarantineReason';
import { EpiDataDto } from './epiDataDto';
import { FollowUpStatus } from './followUpStatus';
import { HealthConditionsDto } from './healthConditionsDto';
import { PersonReferenceDto } from './personReferenceDto';
import { QuarantineType } from './quarantineType';
import { RegionReferenceDto } from './regionReferenceDto';
import { SormasToSormasOriginInfoDto } from './sormasToSormasOriginInfoDto';
import { TracingApp } from './tracingApp';
import { UserReferenceDto } from './userReferenceDto';
import { VaccinationStatus } from './vaccinationStatus';
import { YesNoUnknown } from './yesNoUnknown';

export interface ContactDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  caze?: CaseReferenceDto;
  caseIdExternalSystem?: string;
  caseOrEventInformation?: string;
  disease?: Disease;
  diseaseDetails?: string;
  diseaseVariant?: DiseaseVariant;
  reportDateTime: Date;
  reportingUser: UserReferenceDto;
  reportLat?: number;
  reportLon?: number;
  reportLatLonAccuracy?: number;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  community?: CommunityReferenceDto;
  multiDayContact: boolean;
  firstContactDate?: Date;
  lastContactDate: Date;
  contactIdentificationSource?: ContactIdentificationSource;
  contactIdentificationSourceDetails?: string;
  tracingApp?: TracingApp;
  tracingAppDetails?: string;
  contactProximity?: ContactProximity;
  contactProximityDetails?: string;
  contactCategory?: ContactCategory;
  contactClassification?: ContactClassification;
  contactStatus?: ContactStatus;
  followUpStatus?: FollowUpStatus;
  followUpComment?: string;
  followUpUntil?: Date;
  overwriteFollowUpUntil?: boolean;
  description?: string;
  relationToCase?: ContactRelation;
  relationDescription?: string;
  externalID?: string;
  externalToken?: string;
  internalToken?: string;
  highPriority?: boolean;
  immunosuppressiveTherapyBasicDisease?: YesNoUnknown;
  immunosuppressiveTherapyBasicDiseaseDetails?: string;
  careForPeopleOver60?: YesNoUnknown;
  quarantine?: QuarantineType;
  quarantineTypeDetails?: string;
  quarantineFrom?: Date;
  quarantineTo?: Date;
  person: PersonReferenceDto;
  contactOfficer?: UserReferenceDto;
  resultingCase?: CaseReferenceDto;
  resultingCaseUser?: UserReferenceDto;
  quarantineHelpNeeded?: string;
  quarantineOrderedVerbally?: boolean;
  quarantineOrderedOfficialDocument?: boolean;
  quarantineOrderedVerballyDate?: Date;
  quarantineOrderedOfficialDocumentDate?: Date;
  quarantineHomePossible?: YesNoUnknown;
  quarantineHomePossibleComment?: string;
  quarantineHomeSupplyEnsured?: YesNoUnknown;
  quarantineHomeSupplyEnsuredComment?: string;
  quarantineExtended?: boolean;
  quarantineReduced?: boolean;
  quarantineOfficialOrderSent?: boolean;
  quarantineOfficialOrderSentDate?: Date;
  additionalDetails?: string;
  epiData?: EpiDataDto;
  healthConditions?: HealthConditionsDto;
  sormasToSormasOriginInfo?: SormasToSormasOriginInfoDto;
  ownershipHandedOver?: boolean;
  returningTraveler?: YesNoUnknown;
  endOfQuarantineReason?: EndOfQuarantineReason;
  endOfQuarantineReasonDetails?: string;
  prohibitionToWork?: YesNoUnknown;
  prohibitionToWorkFrom?: Date;
  prohibitionToWorkUntil?: Date;
  reportingDistrict?: DistrictReferenceDto;
  followUpStatusChangeDate?: Date;
  followUpStatusChangeUser?: UserReferenceDto;
  vaccinationStatus?: VaccinationStatus;
}
