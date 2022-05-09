import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import {
  FORM_DATA_INPUT,
  FORM_DATA_CHECKBOX,
  FORM_DATA_WIDGET,
  FORM_DATA_NULL,
} from '../../app.constants';

export const FORM_DATA_EXPORT_CONFIGURATION: FormBase<any>[] = [
  {
    id: 'export',
    title: 'captions.export',
    required: true,
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'exportType',
        className: 'hidden',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'name',
        label: 'captions.ExportConfiguration.NAME',
        validation: ['required'],
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'sharedToPublic',
        label: 'captions.ExportConfiguration.sharedToPublic',
        newLine: true,
      },
    ],
  },
  {
    id: 'groupSelect',
    title: 'Customize export',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-group-select',
        widgetInfo: {
          info: 'strings.infoEditExportConfiguration',
          sections: ['coreData', 'sensitiveData', 'personData', 'locationData'],
        },
        className: 'widget-fullwidth',
      },
    ],
  },
  {
    id: 'coreData',
    title: 'enum.ExportGroupType.CORE',
    className: 'columns-lg-3 columns-md-2',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-group-select',
        widgetInfo: {
          sections: ['coreData'],
        },
        className: 'widget-fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'uuid',
        label: 'uuid',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'taskContext',
        label: 'captions.Task.taskContext',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'caze',
        label: 'captions.Task.caze',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'contact',
        label: 'captions.Task.contact',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'event',
        label: 'captions.Task.event',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'taskType',
        label: 'captions.Task.taskType',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'priority',
        label: 'captions.Task.priority',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'dueDate',
        label: 'captions.Task.dueDate',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'suggestedStart',
        label: 'captions.Task.suggestedStart',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'taskStatus',
        label: 'captions.Task.taskStatus',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'creatorUser',
        label: 'captions.Task.creatorUser',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'creatorComment',
        label: 'captions.Task.creatorComment',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'assigneeUser',
        label: 'captions.Task.assigneeUser',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'assigneeReply',
        label: 'captions.Task.assigneeReply',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'sensitiveData',
    title: 'enum.ExportGroupType.SENSITIVE',
    className: 'columns-lg-3 columns-md-2',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-group-select',
        widgetInfo: {
          sections: ['sensitiveData'],
        },
        className: 'widget-fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'personFirstName',
        label: 'captions.TaskExport.personFirstName',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'personLastName',
        label: 'captions.TaskExport.personLastName',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'personSex',
        label: 'captions.TaskExport.personSex',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'personBirthDate',
        label: 'captions.TaskExport.personBirthDate',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'personData',
    title: 'enum.ExportGroupType.PERSON',
    className: 'columns-lg-3 columns-md-2',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-group-select',
        widgetInfo: {
          sections: ['personData'],
        },
        className: 'widget-fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'personAddressRegion',
        label: 'captions.TaskExport.personAddressRegion',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'personAddressDistrict',
        label: 'captions.TaskExport.personAddressDistrict',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'personAddressCommunity',
        label: 'captions.TaskExport.personAddressCommunity',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'personAddressFacility',
        label: 'captions.TaskExport.personAddressFacility',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'personAddressFacilityDetail',
        label: 'captions.TaskExport.personAddressFacilityDetail',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'personAddressCity',
        label: 'captions.TaskExport.personAddressCity',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'personAddressStreet',
        label: 'captions.TaskExport.personAddressStreet',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'personAddressHouseNumber',
        label: 'captions.TaskExport.personAddressHouseNumber',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'personAddressPostalCode',
        label: 'captions.TaskExport.personAddressPostalCode',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'personPhone',
        label: 'captions.TaskExport.personPhone',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'personPhoneOwner',
        label: 'captions.TaskExport.personPhoneOwner',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'personEmailAddress',
        label: 'captions.TaskExport.personEmailAddress',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'personOtherContactDetails',
        label: 'captions.TaskExport.personOtherContactDetails',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'locationData',
    title: 'enum.ExportGroupType.LOCATION',
    className: 'columns-lg-3 columns-md-2',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-group-select',
        widgetInfo: {
          sections: ['locationData'],
        },
        className: 'widget-fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'regionName',
        label: 'captions.regionName',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'districtName',
        label: 'captions.districtName',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'communityName',
        label: 'captions.communityName',
        className: 'fullwidth',
      },
    ],
  },
];
