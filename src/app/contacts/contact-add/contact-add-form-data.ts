import {
  ContactProximity,
  YesNoUnknown,
  ContactCategory,
  ContactRelation,
} from '../../_constants/enums';
import {
  FORM_DATA_CHECKBOX,
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_TEXTAREA,
} from '../../_constants/form-data';
import { Sex } from '../../_models/sex';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();
const optionsSex = pipe.transform(Sex);
const optionsReturningTraveler = pipe.transform(YesNoUnknown);
const optionsRegion = pipe.transform(['Default region']);
const optionsDistrict = pipe.transform(['Default district']);
const optionsCommunity = pipe.transform(['Default community']);
const optionsContactProximity = pipe.transform(ContactProximity);
const optionsContactCategory = pipe.transform(ContactCategory);
const optionsRelationToCase = pipe.transform(ContactRelation);

export const FORM_DATA_CONTACT_ADD = [
  {
    id: 'contactData',
    title: 'headingContactData',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'firstName',
        label: 'Contact.firstName',
        validation: ['required'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'lastName',
        label: 'Contact.lastName',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'year',
        label: 'Contact.birth',
        placeholder: 'year',
        options: [],
        className: 'size-small',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'month',
        label: ' ',
        placeholder: 'month',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'day',
        label: ' ',
        placeholder: 'day',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'sex',
        label: 'sex',
        options: optionsSex,
        className: 'size-small',
        validation: ['required'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'nationalHealthId',
        label: 'nationalHealthId',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'passportNumber',
        label: 'passportNumber',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'phoneNumber',
        label: 'person.primaryPhone',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'email',
        label: 'Person.emailAddress',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'returningTraveler',
        label: 'Contact.returningTraveler',
        options: optionsReturningTraveler,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'reportDateTime',
        label: 'Contact.reportDateTime',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'multiDayContact',
        label: 'Contact.multiDayContact',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'firstContactDate',
        label: 'Contact.firstContactDate',
        dependingOn: 'multiDayContact',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'lastContactDate',
        label: 'Contact.lastContactDate',
        newLine: true,
      },
    ],
  },
  {
    id: 'location',
    title: 'headingLocation',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region',
        label: 'region',
        options: optionsRegion,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district',
        label: 'district',
        options: optionsDistrict,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community',
        label: 'community',
        options: optionsCommunity,
      },
    ],
  },
  {
    id: 'contactType',
    title: 'Contact.typeOfContact',
    subTitle: 'Contact.pickClosest',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'region',
        label: '',
        options: optionsContactProximity,
        separated: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'contactProximityDetails',
        label: 'Contact.contactProximityDetails',
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'contactCategory',
        label: 'Contact.contactCategory',
        options: optionsContactCategory,
        newLine: true,
      },
    ],
  },
  {
    id: 'contactDescription',
    title: 'Contact.descriptionShort',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'relationToCase',
        label: 'Contact.contactProximity',
        options: optionsRelationToCase,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'relationDescription',
        label: 'Contact.relationDescription',
        dependingOn: 'relationToCase',
        dependingOnValues: ['OTHER'],
      },
      {
        ...FORM_DATA_TEXTAREA,
        key: 'description',
        label: 'Contact.description',
        newLine: true,
      },
    ],
  },
];
