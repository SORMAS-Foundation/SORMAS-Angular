import { FORM_DATA_SELECT, Disease, FORM_DATA_WIDGET } from '../../app.constants';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsDisease = pipe.transform(Disease);

export const FORM_DATA_LINE_LISTING_ADD = [
  {
    id: 'case',
    title: 'captions.contactSourceCase',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        key: 'caze',
        widget: 'app-contact-case-details',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'disease',
    title: 'lineListingSharedDisease',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        label: 'captions.disease',
        validation: ['required'],
        options: optionsDisease,
      },
    ],
  },
  {
    id: 'location',
    title: 'lineListingSharedLocation',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'captions.regionName',
        validation: ['required'],
        service: 'regionService',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: 'captions.districtName',
        validation: ['required'],
        service: 'districtService',
        determinedBy: [
          {
            key: 'region.uuid',
          },
        ],
      },
    ],
  },
  {
    id: 'newContacts',
    title: 'captions.lineListingNewContactsList',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        key: 'contacts',
        widget: 'app-line-listing-new-contacts',
        className: 'fullwidth',
      },
    ],
  },
];
