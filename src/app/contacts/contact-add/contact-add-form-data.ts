import {
  ContactProximity,
  YesNoUnknown,
  ContactCategory,
  ContactRelation,
  Sex,
} from '../../_constants/enums';
import {
  FORM_DATA_CHECKBOX,
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_TEXTAREA,
  FORM_DATA_WIDGET,
} from '../../_constants/form-data';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();
const optionsSex = pipe.transform(Sex);
const optionsReturningTraveler = pipe.transform(YesNoUnknown);
const optionsContactProximity = pipe.transform(ContactProximity);
const optionsContactCategory = pipe.transform(ContactCategory);
const optionsRelationToCase = pipe.transform(ContactRelation);

export const FORM_DATA_CONTACT_ADD = [
  {
    id: 'contactData',
    title: 'strings.headingContactData',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'firstName',
        label: 'captions.Contact.firstName',
        validation: ['required'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'lastName',
        label: 'captions.Contact.lastName',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'year',
        label: 'captions.Person.birthdate',
        placeholder: 'strings.year',
        options: [],
        className: 'size-small',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'month',
        label: ' ',
        placeholder: 'strings.month',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'day',
        label: ' ',
        placeholder: 'strings.day',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'sex',
        label: 'captions.sex',
        options: optionsSex,
        className: 'size-small',
        validation: ['required'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'nationalHealthId',
        label: 'captions.nationalHealthId',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'passportNumber',
        label: 'captions.passportNumber',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'phoneNumber',
        label: 'captions.Person.phone',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'email',
        label: 'captions.Person.emailAddress',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'returningTraveler',
        label: 'captions.Contact.returningTraveler',
        options: optionsReturningTraveler,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'reportDateTime',
        label: 'captions.Contact.reportDateTime',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'multiDayContact',
        label: 'captions.Contact.multiDayContact',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'firstContactDate',
        label: 'captions.Contact.firstContactDate',
        dependingOn: 'multiDayContact',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'lastContactDate',
        label: 'captions.Contact.lastContactDate',
        newLine: true,
      },
    ],
  },
  {
    id: 'location',
    title: 'strings.headingLocation',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region',
        className: 'hidden',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district',
        className: 'hidden',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community',
        className: 'hidden',
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-location-dropdowns',
        widgetInfo: {
          region: {
            key: 'region',
            label: 'captions.region',
            className: 'size-medium',
          },
          district: {
            key: 'district',
            label: 'captions.district',
            className: 'size-medium',
          },
          community: {
            key: 'community',
            label: 'captions.community',
            className: 'size-medium',
            newLine: true,
          },
        },
      },
    ],
  },
  {
    id: 'contactType',
    title: 'captions.Contact.contactProximity',
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
        label: 'captions.Contact.contactProximityDetails',
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'contactCategory',
        label: 'captions.Contact.contactCategory',
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
        label: 'captions.Contact.contactProximity',
        options: optionsRelationToCase,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'relationDescription',
        label: 'captions.Contact.relationDescription',
        dependingOn: 'relationToCase',
        dependingOnValues: ['OTHER'],
      },
      {
        ...FORM_DATA_TEXTAREA,
        key: 'description',
        label: 'captions.Contact.description',
        newLine: true,
      },
    ],
  },
];
