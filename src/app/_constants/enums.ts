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

export enum YesNoUnknown {
  YES = 'Yes',
  NO = 'No',
  UNKNOWN = 'Unknown',
}
