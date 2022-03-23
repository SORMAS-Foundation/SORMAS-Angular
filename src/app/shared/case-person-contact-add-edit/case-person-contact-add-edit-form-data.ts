import {
  AreaType,
  FORM_DATA_CHECKBOX,
  FORM_DATA_INPUT,
  FORM_DATA_SELECT,
  PersonAddressType,
  PersonContactDetailType,
  PhoneNumberType,
} from '../../app.constants';
import { FormGroupStyleType } from '../../_models/common';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsPhoneNumberType = pipe.transform(PhoneNumberType);
const optionsPersonContactDetailType = pipe.transform(PersonContactDetailType);

export const FORM_DATA_CASE_PERSON_CONTACT_ADD_EDIT = [
  {
    id: 'addressType',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'collectData',
        label: 'captions.personContactDetailThirdParty',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'thirdPartyRole',
        label: 'captions.PersonContactDetail.thirdPartyRole',
        dependingOn: 'collectData',
        dependingOnValues: [true],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'thirdPartyName',
        label: 'captions.PersonContactDetail.thirdPartyName',
        dependingOn: 'collectData',
        dependingOnValues: [true],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'personContactDetailType',
        label: 'Contact.typeOfContact',
        options: optionsPersonContactDetailType,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'details',
        label: 'captions.PersonContactDetail.details',
        dependingOn: 'personContactDetailType',
        dependingOnValues: ['OTHER'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'phoneNumberType',
        label: 'captions.PersonContactDetail.phoneNumberType',
        options: optionsPhoneNumberType,
        dependingOn: 'personContactDetailType',
        dependingOnValues: ['PHONE'],
      },
      // {
      //   ...FORM_DATA_INPUT,
      //   key: 'details',
      //   label: 'captions.PersonContactDetail.details',
      //   dependingOn: 'phoneNumberType',
      //   dependingOnValues: ['OTHER'],
      //   newLine: true,
      // },
      {
        ...FORM_DATA_INPUT,
        key: 'contactInformation',
        label: 'captions.PersonContactDetail.contactInformation',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'additionalInformation',
        label: 'captions.PersonContactDetail.additionalInformation',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'primaryContact',
        label: 'captions.PersonContactDetail.primaryContact',
        newLine: true,
      },
    ],
  },
];
