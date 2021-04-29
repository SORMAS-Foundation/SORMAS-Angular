export enum CaseClassification {
  NOT_CLASSIFIED = 'Not yet classified',
  SUSPECT = 'Suspect case',
  PROBABLE = 'Probabale case',
  CONFIRMED = 'Confirmed case',
  NO_CASE = 'Not a case',
}

export enum CaseOutcome {
  NO_OUTCOME = 'No outcome yet',
  DECEASED = 'Deceased',
  RECOVERED = 'Recovered',
  UNKNOWN = 'Unknown',
}

export enum CaseOrigin {
  IN_COUNTRY = 'In-country',
  POINT_OF_ENTRY = 'Point of entry',
}

export enum InvestigationStatus {
  PENDING = 'Investigation pending',
  DONE = 'Investigation done',
  DISCARDED = 'Investigation discarded',
}

export enum Disease {
  AFP = 'Acute Flaccid Paralysis',
  ANTHRAX = 'Anthrax',
  CORONAVIRUS = 'COVID-19',
  CHOLERA = 'Cholera',
  CONGENITAL_RUBELLA = 'Congenital Rubella',
  DENGUE = 'Dengue Fever',
  EVD = 'Ebola Virus Disease',
  GUINEA_WORM = 'Guinea Worm',
  RABIES = 'Human Rabies',
  NEW_INFLUENZA = 'Influenza (New subtype)',
  LASSA = 'Lassa',
  MEASLES = 'Measles',
  CSM = 'Meningitis (CSM)',
  MONKEYPOX = 'Monkeypox',
  UNDEFINED = 'Not Yet Defined',
  OTHER = 'Other Epidemic Disease',
  PLAGUE = 'Plague',
  POLIO = 'Poliomyelitis',
  UNSPECIFIED_VHF = 'Unspecified VHF',
  YELLOW_FEVER = 'Yellow Fever',
  // WEST_NILE_FEVER = 'WEST_NILE_FEVER',
  // PNEUMONIA = 'PNEUMONIA',
  // MALARIA = 'MALARIA',
  // TYPHOID_FEVER = 'TYPHOID_FEVER',
  // ACUTE_VIRAL_HEPATITIS = 'ACUTE_VIRAL_HEPATITIS',
  // NON_NEONATAL_TETANUS = 'NON_NEONATAL_TETANUS',
  // HIV = 'HIV',
  // SCHISTOSOMIASIS = 'SCHISTOSOMIASIS',
  // SOIL_TRANSMITTED_HELMINTHS = 'SOIL_TRANSMITTED_HELMINTHS',
  // TRYPANOSOMIASIS = 'TRYPANOSOMIASIS',
  // DIARRHEA_DEHYDRATION = 'DIARRHEA_DEHYDRATION',
  // DIARRHEA_BLOOD = 'DIARRHEA_BLOOD',
  // SNAKE_BITE = 'SNAKE_BITE',
  // RUBELLA = 'RUBELLA',
  // TUBERCULOSIS = 'TUBERCULOSIS',
  // LEPROSY = 'LEPROSY',
  // LYMPHATIC_FILARIASIS = 'LYMPHATIC_FILARIASIS',
  // BURULI_ULCER = 'BURULI_ULCER',
  // PERTUSSIS = 'PERTUSSIS',
  // NEONATAL_TETANUS = 'NEONATAL_TETANUS',
  // ONCHOCERCIASIS = 'ONCHOCERCIASIS',
  // DIPHTERIA = 'DIPHTERIA',
  // TRACHOMA = 'TRACHOMA',
  // YAWS_ENDEMIC_SYPHILIS = 'YAWS_ENDEMIC_SYPHILIS',
  // MATERNAL_DEATHS = 'MATERNAL_DEATHS',
  // PERINATAL_DEATHS = 'PERINATAL_DEATHS',
  // INFLUENZA_A = 'INFLUENZA_A',
  // INFLUENZA_B = 'INFLUENZA_B',
  // H_METAPNEUMOVIRUS = 'H_METAPNEUMOVIRUS',
  // RESPIRATORY_SYNCYTIAL_VIRUS = 'RESPIRATORY_SYNCYTIAL_VIRUS',
  // PARAINFLUENZA_1_4 = 'PARAINFLUENZA_1_4',
  // ADENOVIRUS = 'ADENOVIRUS',
  // RHINOVIRUS = 'RHINOVIRUS',
  // ENTEROVIRUS = 'ENTEROVIRUS',
  // M_PNEUMONIAE = 'M_PNEUMONIAE',
  // C_PNEUMONIAE = 'C_PNEUMONIAE',
}

export enum PlaceOfStay {
  FACILITY = 'Facility',
  HOME = 'Home',
}

export enum Quarantine {
  HOME = 'Home',
  INSTITUTIONELL = 'Institutional',
  NONE = 'None',
  UNKNOWN = 'Unknown',
  OTHER = 'Other',
}

export enum VaccinationStatus {
  VACCINATED = 'Vaccinated',
  UNVACCINATED = 'Unvaccinated',
  UNKNOWN = 'Unknown',
}

export enum VaccinationSource {
  VACCINATION_CARD = 'Vaccination card',
  ORAL_COMMUNICATION = 'Oral communication',
  NO_EVIDENCE = 'No evidence',
  UNKNOWN = 'Unknown',
}

export enum VaccineName {
  COMIRNATY = 'Pfizer-BioNTech COVID-19 vaccine',
  MRNA_1273 = 'Moderna COVID-19 vaccine',
  OXFORD_ASTRA_ZENECA = 'Oxford-AstraZeneca COVID-19 vaccine',
  AD26_COV2_S = 'Ad26.COV2.S',
  NVX_COV_2373 = 'Novavax COVID-19 vaccine',
  SANOFI_GSK = 'Sanofi-GSK',
  UNKNOWN = 'Unknown',
  OTHER = 'Other',
}

export enum VaccineManufacturer {
  BIONTECH_PFIZER = 'BioNTech/Pfizer',
  MODERNA = 'Moderna',
  ASTRA_ZENECA = 'AstraZeneca',
  JOHNSON_JOHNSON = 'Johnson & Johnson',
  NOVAVAX = 'Novavax',
  SANOFI_GSK = 'Sanofi-GSK',
  UNKNOWN = 'Unknown',
  OTHER = 'Other',
}

export enum YesNoUnknown {
  YES = 'Yes',
  NO = 'No',
  UNKNOWN = 'Unknown',
}

export enum CaseIdentificationSource {
  UNKNOWN = 'Unknown',
  OUTBREAK_INVESTIGATION = 'Outbreak investigation',
  CONTACT_TRACKING_APP = 'Contact tracking app',
  SUSPICION_REPORT = 'Suspicion report',
  CONTACT_TRACING = 'Contact tracing',
  SCREENING = 'Screening',
  OTHER = 'Other',
}

export enum ScreeningType {
  ON_HOSPITAL_ADMISSION = 'On admission in a hospital',
  ON_CARE_HOME_ADMISSION = 'On admission in care home',
  ON_ASYLUM_ADMISSION = 'On admission in an asylum seeking centre',
  ON_ENTRY_FROM_RISK_AREA = 'On entry from risk area',
  HEALTH_SECTOR_EMPLOYEE = 'Employee in health sector',
  EDUCATIONAL_INSTITUTIONS = 'Educational institution',
  OTHER = 'Other',
}

export enum InfectionSetting {
  UNKNOWN = 'Unknown',
  AMBULATORY = 'Ambulatory',
  MEDICAL_PRACTICE = 'Ambulatory ➜ Medical practice',
  OPERATIVE_1200 = 'Ambulatory ➜ Operative',
  HOSPITAL_1300 = 'Ambulatory ➜ Hospital',
  OTHER_OUTPATIENT_FACILITY = 'Ambulatory ➜ Other outpatient facility',
  STATIONARY = 'In-patient',
  HOSPITAL_2100 = 'In-patient ➜ Hospital',
  NORMAL_WARD = 'Hospital ➜ Normal ward',
  OPERATIVE_2111 = 'Normal ward ➜ Operative',
  NOT_OPERATIVE = 'Normal ward ➜ Not operative',
  HEMATOLOGICAL_ONCOLOGY = 'Normal ward ➜ Hematological oncology',
  CHILDREN_WARD = 'Hospital ➜ Childrens ward',
  NEONATOLOGY = 'Hospital ➜ Neonatology',
  INTENSIVE_CARE_UNIT = 'Hospital ➜ Intensive care',
  OTHER_STATION = 'Hospital ➜ Other station',
  NURSING_HOME = 'In-patient ➜ Nursing home',
  REHAB_FACILITY = 'In-patient ➜ Rehab facility',
  OTHER_STATIONARY_FACILITY = 'In-patient ➜ Other in-patient facility',
}

export enum Trimester {
  FIRST = 'First',
  SECOND = 'Second',
  THIRD = 'Third',
  UNKNOWN = 'Unknown',
}

export enum HospitalizationReason {
  REPORTED_DISEASE = 'Reported disease',
  UNKNOWN = 'Unknown',
  OTHER = 'Other',
}

export enum BasicPosition {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  CENTER = 'CENTER',
}

export enum Position {
  TOPLEFT = 'TOPLEFT',
  TOP = 'TOP',
  TOPRIGHT = 'TOPRIGHT',
  RIGHT = 'RIGHT',
  BOTTOMRIGHT = 'BOTTOMRIGHT',
  BOTTOM = 'BOTTOM',
  BOTTOMLEFT = 'BOTTOMLEFT',
  LEFT = 'LEFT',
  CENTER = 'CENTER',
}

export enum DateCardType {
  STANDARD = 'standard',
  ACCENT = 'accent',
  CARD = 'card',
  HIGHLIGHT = 'highlight',
  FLAT = 'flat',
}

export enum CardStatusMap {
  CONFIRMED = 'confirmed',
  PENEDING = 'undetermined',
  INDETERMINATE = 'undetermined',
  DONE = 'completed',
  NEGATIVE = 'good',
  POSITIVE = 'critical',
  NOT_EXECUTABLE = 'critical',
}

export enum CardAppearanceOptions {
  STANDARD = 'standard',
  CARD = 'card',
  OUTLINED = 'outlined',
}
