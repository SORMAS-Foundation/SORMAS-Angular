import { FORM_DATA_SELECT, Disease, FORM_DATA_WIDGET } from '../../app.constants';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsDisease = pipe.transform(Disease);

export const FORM_DATA_LINE_LISTING_ADD = [
  {
    id: 'disease',
    title: 'Shared disease',
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
    title: 'Shared location',
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
      {
        ...FORM_DATA_SELECT,
        key: 'facilityTypeGroup',
        label: 'captions.facilityTypeGroup',
        validation: ['required'],
        service: 'helperService',
        serviceMethod: 'getFacilityCategories',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        label: 'captions.facilityType',
        validation: ['required'],
        service: 'helperService',
        serviceMethod: 'getFacilityTypes',
        determinedBy: [
          {
            key: 'facilityTypeGroup',
          },
        ],
      },
    ],
  },
  {
    id: 'newCases',
    title: 'strings.headingNewCases',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        key: 'cases',
        widget: 'app-line-listing-new-cases',
        className: 'fullwidth',
      },
    ],
  },
];
