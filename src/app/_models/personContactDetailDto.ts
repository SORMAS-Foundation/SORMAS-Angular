import { PersonContactDetailType } from './personContactDetailType';
import { PersonReferenceDto } from './personReferenceDto';
import { PhoneNumberType } from './phoneNumberType';

export interface PersonContactDetailDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  person?: PersonReferenceDto;
  primaryContact?: boolean;
  personContactDetailType?: PersonContactDetailType;
  phoneNumberType?: PhoneNumberType;
  details?: string;
  contactInformation?: string;
  additionalInformation?: string;
  thirdParty?: boolean;
  thirdPartyRole?: string;
  thirdPartyName?: string;
}
