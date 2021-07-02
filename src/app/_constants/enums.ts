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

export enum SamplePurpose {
  EXTERNAL = 'External',
  INTERNAL = 'Internal',
}

export enum SampleMaterial {
  BLOOD = 'Blood',
  SERA = 'Sera',
  STOOL = 'Stool',
  NASALSWAB = 'Nasal swab',
  THROATSWAB = 'Throat swab',
  NPSWAB = 'Nasopharyngeal swab',
  RECTALSWAB = 'Rectal swab',
  CEREBROSPINALFLUID = 'Cerebrospinal fluid',
  CRUST = 'Crust',
  TISSUE = 'Tissue',
  URINE = 'Urine',
  CORNEAPM = 'Cornea p.m',
  SALIVA = 'Saliva',
  URINEPM = 'Urine p.m.',
  NUCHALSKINBIOPSY = 'Nuchal skin biopsy',
  SPUTUM = 'Sputum',
  ENDOTRACHEALASPIRATE = 'Endotracheal aspirate',
  BRONCHOALVEOLARLAVAGE = 'Bronchoalveolar lavage',
  BRAINTISSUE = 'Brain tissue',
  OTHER = 'Other',
}

export enum SamplingReason {
  PRESENCE_OF_SYMPTOMS = 'Presence of symptoms',
  OUTBREAK = 'Outbreak',
  SCREENING = 'Screening',
  PROFESSIONAL_REASON = 'Professional reason',
  QUARANTINE_REGULATIONS = 'Quarantine regulations',
  CONTACT_TO_CASE = 'Contact to case',
  SWISS_COVID_APP_NOTIFICATION = 'Swiss covid app notification',
  PLANNING_TO_TRAVEL = 'Planning to travel',
  RETURNING_TRAVELER = 'Returning traveler',
  PERSONAL_REASON = 'Personal reason',
  MOVING_RETURNING_RETIREMENT_HOME = 'Moving/returning into retirement home',
  QUARANTINE_END = 'Quarantine end',
  UNKNOWN = 'Unknown',
  OTHER_REASON = 'Other reason',
}

export enum SpecimenCondition {
  ADEQUATE = 'Adequate ',
  NOTADEQUATE = 'Not adequate',
}

export enum PathogenTestResultType {
  INDETERMINATE = 'Indeterminate',
  PENDING = 'Pending',
  NEGATIVE = 'Negative',
  POSITIVE = 'Positive',
  NOTDONE = 'Not done',
}

export enum PathogenTestType {
  ANTIBODYDETECTION = 'Antibody detection',
  ANTIGENDETECTION = 'Antigen detection',
  RAPIDTEST = 'Rapid test',
  CULTURE = 'Culture',
  HISTOPATHOLOGY = 'Histopatholog',
  ISOLATION = 'Isolation',
  IGMSERUMANTIBODY = 'IgM serum antibody',
  IGGSERUMANTIBODY = 'IgG serum antibody',
  IGASERUMANTIBODY = 'IgA serum antibody',
  INCUBATIONTIME = 'Incubation time',
  INDIRECTFLUORESCENTANTIBODY = 'Indirect Fluorescent Antibody (IFA)',
  DIRECTFLUORESCENTANTIBODY = 'Direct fluorescent antibody (FA)',
  MICROSCOPY = 'Microscopy',
  NEUTRALIZINGANTIBODIES = 'Neutralizing antibodies',
  PCRRTPCR = 'PCR / RT-PCR',
  GRAMSTAIN = 'Gram Stain',
  LATEXAGGLUTINATION = 'Latex Agglutination',
  CQVALUEDETECTION = 'CQQ Value Detection',
  SEQUENCING = 'Sequencing',
  DNAMICROARRAY = 'DNA Microarray',
  OTHER = 'Other',
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

export enum TemperatureSource {
  AXILLARY = 'Axillary',
  ORAL = 'Oral',
  RECTAL = 'Rectal',
  NON_CONTACT = 'Non contact',
}

export enum TableAppearanceOptions {
  STANDARD = 'standard',
  MINIMAL = 'minimal',
}

export enum ConveyanceTypeOptions {
  CAR = 'Car',
  BUS = 'Bus',
  MOTORBIKE = 'Motorbike',
  OTHER = 'Other',
}

export enum TaskContextOptions {
  CASE = 'Case',
  CONTACT = 'Contact',
  EVENT = 'Event',
  GENERAL = 'General',
}

export enum TaskTypeOptions {
  ACTIVE_SEARCH_FOR_OTHER_CASES = 'Active search for other cases',
  CASE_ISOLATION = 'Case isolation',
  CASE_INVESTIGATION = 'Case investigation',
  CASE_MANAGEMENT = 'Case management',
  CASE_BURIAL = 'Case burial',
  CONTACT_TRACING = 'Contact tracing',
  SAMPLE_COLLECTION = 'Sample collection',
  CONTACT_INVESTIGATION = 'Contact investigation',
  CONTACT_FOLLOW_UP = 'Contact follow-up',
  ANIMAL_TESTING = 'Animal testing',
  EVENT_INVESTIGATION = 'Event investigation',
  EVENT_CONTINUE_INVESTIGATION = 'Event continue investigation',
  EVENT_REQUEST_ADDITIONAL_INFORMATION = 'Event request additional information',
  TREATMENT_CENTER_ESTABLISHMENT = 'Treatment center establishement',
  ENVIRONMENTAL_HEALTH_ACTIVITIES = 'Environmental health activities',
  DECONTAMINATION_DISINFECTION_ACTIVITIES = 'Decontamination disinfection activities',
  QUARANTINE_PLACE = 'Quarantine place',
  VACCINATION_ACTIVITIES = 'Vaccination activities',
  ANIMAL_DEPOPULATION = 'Animal depopulation',
  OTHER = 'Other',
  DAILY_REPORT_GENERATION = 'Daily report generation',
  SURVEILLANCE_REPORT_GENERATION = 'Surveillance report generation',
  WEEKLY_REPORT_GENERATION = 'Weekly report generation',
}

export enum TaskPriorityOptions {
  HIGH = 'High',
  NORMAL = 'Normal',
  LOW = 'Low',
}

export enum TaskStatusOptions {
  PENDING = 'Pending',
  DONE = 'Done',
  REMOVED = 'Removed',
  NOTEXECUTABLE = 'Not executable',
}

export enum ContactProximity {
  TOUCHEDFLUID = 'Touched fluid of source case',
  PHYSICALCONTACT = 'Direct physical contact with source case',
  CLOTHESOROTHER = 'Manipulation of clothes or other objects of source case',
  CLOSECONTACT = 'Was in close proximity (1 meter) with source case',
  FACETOFACELONG = 'Face-to-face contact of at least 15 minutes',
  MEDICALUNSAFE = 'Medical personnel with a high risk of exposure, e.g. unprotected relevant exposure to secretions',
  SAMEROOM = 'Was in same room or house with source case',
  AIRPLANE = 'Airplane, sitting up to two rows in front or behind the source case',
  FACETOFACESHORT = 'Face-to-face contact of less than 15 minutes',
  MEDICALSAFE = 'Medical personnel at save proximity (> 2 meter) or with protective equipment',
  MEDICALSAMEROOM = 'Medical personnel that was in same room or house with source case',
  AEROSOL = 'Persons exposed to aerosol producing activities',
  MEDICALDISTANT = 'Medical personnel at save proximity (> 2 meter), without direct contact with secretions or excretions of the patient and without aerosol exposure',
  MEDICALLIMITED = 'Medical personnel with limited exposure, e.g. with contact < 2m to COVID-19 cases without protective equipment',
}

export enum ContactCategory {
  HIGHRISK = 'High risk contact',
  HIGHRISKMED = 'High risk medical contact',
  MEDIUMRISKMED = 'Medium risk medical contact',
  LOWRISK = 'Low risk contact',
  NORISK = 'No risk contact',
}

export enum ContactRelation {
  SAMEHOUSEHOLD = 'Live in the same household',
  FAMILYMEMBERORFRIEND = 'Other family member or friend',
  SAMEENVIRONMENT = 'Work in the same environment',
  MEDICALCARE = 'Provided medical care for the case',
  OTHER = 'Other',
}
