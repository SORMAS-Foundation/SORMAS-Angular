export const FORM_DATA_CASE_DETAILS = [
  {
    title: 'Vaccine Name',
    fields: [
      {
        key: 'vaccineName',
        label: 'Vaccine Name',
        value: '',
        validation: ['required'],
        order: 1,
        controlType: 'input',
        options: [],
        type: 'text',
        newLine: false
      }
    ]
  },
  {
    title: 'Other stuff',
    fields: [
      {
        key: 'disease',
        label: 'Disease',
        value: '',
        validation: ['required'],
        order: 1,
        controlType: 'input',
        options: [],
        type: 'text',
        newLine: false
      }
    ]
  }
]
