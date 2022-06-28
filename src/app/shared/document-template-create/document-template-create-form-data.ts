import { FORM_DATA_CHECKBOX, FORM_DATA_SELECT } from '../../app.constants';

export const FORM_DATA_DOCUMENT_TEMPLATE_CREATE = [
  {
    id: 'upload',
    appearance: 'BASIC',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'uploadGeneratedDocumentToEntity',
        label: 'captions.DocumentTemplate.uploadGeneratedDocumentToEntity',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'documents',
    appearance: 'BASIC',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'templates',
        label: 'captions.DocumentTemplate.QuarantineOrder',
        options: [
          {
            key: 'kontakt.docx',
            value: 'Kontakt.docx',
          },
        ],
        className: 'size-large',
      },
    ],
  },
];
