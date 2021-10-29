export enum CaseClassification {
  NOT_CLASSIFIED = 'enum.CaseClassification.NOT_CLASSIFIED',
  SUSPECT = 'enum.CaseClassification.SUSPECT',
  PROBABLE = 'enum.CaseClassification.PROBABLE',
  CONFIRMED = 'enum.CaseClassification.CONFIRMED',
  NO_CASE = 'enum.CaseClassification.NO_CASE',
  CONFIRMED_NO_SYMPTOMS = 'enum.CaseClassification.CONFIRMED_NO_SYMPTOMS',
  CONFIRMED_UNKNOWN_SYMPTOMS = 'enum.CaseClassification.CONFIRMED_UNKNOWN_SYMPTOMS',
}

export enum CaseOutcome {
  NO_OUTCOME = 'enum.CaseOutcome.NO_OUTCOME',
  DECEASED = 'enum.CaseOutcome.DECEASED',
  RECOVERED = 'enum.CaseOutcome.RECOVERED',
  UNKNOWN = 'enum.CaseOutcome.UNKNOWN',
}

export enum CaseOrigin {
  IN_COUNTRY = 'enum.CaseOrigin.IN_COUNTRY',
  POINT_OF_ENTRY = 'enum.CaseOrigin.POINT_OF_ENTRY',
}

export enum FollowupStatus {
  FOLLOW_UP = 'enum.FollowUpStatus.FOLLOW_UP',
  COMPLETED = 'enum.FollowUpStatus.COMPLETED',
  CANCELED = 'enum.FollowUpStatus.CANCELED',
  LOST = 'enum.FollowUpStatus.LOST',
  NO_FOLLOW_UP = 'enum.FollowUpStatus.NO_FOLLOW_UP',
}

export enum Presentcondition {
  ALIVE = 'enum.PresentCondition.ALIVE',
  DEAD = 'enum.PresentCondition.DEAD',
  BURIED = 'enum.PresentCondition.BURIED',
  UNKNOWN = 'enum.PresentCondition.UNKNOWN',
}

export enum InvestigationStatus {
  PENDING = 'enum.InvestigationStatus.PENDING',
  DONE = 'enum.InvestigationStatus.DONE',
  DISCARDED = 'enum.InvestigationStatus.DISCARDED',
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
  WEST_NILE_FEVER = 'West nile fever',
  PNEUMONIA = 'Pneumonia',
  MALARIA = 'Malaria',
  TYPHOID_FEVER = 'Typhoid fever',
  ACUTE_VIRAL_HEPATITIS = 'Acute viral hepatitis',
  NON_NEONATAL_TETANUS = 'Non neonatal tetanus',
  HIV = 'Hiv',
  SCHISTOSOMIASIS = 'Schistosomiasis',
  SOIL_TRANSMITTED_HELMINTHS = 'Soil transitted helminths',
  TRYPANOSOMIASIS = 'Trypanosomiasis',
  DIARRHEA_DEHYDRATION = 'Diarrhea dehydration',
  DIARRHEA_BLOOD = 'Diarrhea blood',
  SNAKE_BITE = 'Snake bite',
  RUBELLA = 'Rubella',
  TUBERCULOSIS = 'Tuberculosis',
  LEPROSY = 'Leprosy',
  LYMPHATIC_FILARIASIS = 'Lymphatic filariasis',
  BURULI_ULCER = 'Buruli ulcer',
  PERTUSSIS = 'Pertussis',
  NEONATAL_TETANUS = 'Neonatal tetanus',
  ONCHOCERCIASIS = 'Onochocerciasis',
  DIPHTERIA = 'Diphteria',
  TRACHOMA = 'Trachoma',
  YAWS_ENDEMIC_SYPHILIS = 'Yaws endemic syphilis',
  MATERNAL_DEATHS = 'Maternal deaths',
  PERINATAL_DEATHS = 'Perinatal deaths',
  INFLUENZA_A = 'Influenza A',
  INFLUENZA_B = 'Influenza B',
  H_METAPNEUMOVIRUS = 'H metapneumovirus',
  RESPIRATORY_SYNCYTIAL_VIRUS = 'Respiratory syncytial virus',
  PARAINFLUENZA_1_4 = 'Parainfluenza 1 4',
  ADENOVIRUS = 'Adenovirus',
  RHINOVIRUS = 'Rhinovirus',
  ENTEROVIRUS = 'Enterovirus',
  M_PNEUMONIAE = 'M pneumoniae',
  C_PNEUMONIAE = 'C pneumoniae',
}

export enum PlaceOfStay {
  FACILITY = 'Facility',
  HOME = 'Home',
}

export enum QuarantineType {
  HOME = 'enum.QuarantineType.HOME',
  INSTITUTIONELL = 'enum.QuarantineType.INSTITUTIONELL',
  HOSPITAL = 'enum.QuarantineType.HOSPITAL',
  HOTEL = 'enum.QuarantineType.HOTEL',
  ASYLUM_ACCOMMODATION = 'enum.QuarantineType.ASYLUM_ACCOMMODATION',
  NONE = 'enum.QuarantineType.NONE',
  UNKNOWN = 'enum.QuarantineType.UNKNOWN',
  OTHER = 'enum.QuarantineType.OTHER',
}

export enum VaccinationStatus {
  VACCINATED = 'enum.VaccinationStatus.VACCINATED',
  UNVACCINATED = 'enum.VaccinationStatus.UNVACCINATED',
  UNKNOWN = 'enum.VaccinationStatus.UNKNOWN',
}

export enum VaccinationInfoSource {
  VACCINATION_CARD = 'enum.VaccinationInfoSource.VACCINATION_CARD',
  ORAL_COMMUNICATION = 'enum.VaccinationInfoSource.ORAL_COMMUNICATION',
  NO_EVIDENCE = 'enum.VaccinationInfoSource.NO_EVIDENCE',
  UNKNOWN = 'enum.VaccinationInfoSource.UNKNOWN',
}

export enum InformationSource {
  NOT_APPLICABLE = 'enum.EventSourceType.NOT_APPLICABLE',
  MEDIA_NEWS = 'enum.EventSourceType.MEDIA_NEWS',
  HOTLINE_PERSON = 'enum.EventSourceType.HOTLINE_PERSON',
  MATHEMATICAL_MODEL = 'enum.EventSourceType.MATHEMATICAL_MODEL',
  INSTITUTIONAL_PARTNER = 'enum.EventSourceType.INSTITUTIONAL_PARTNER',
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

export enum InstitutionalPartnerType {
  HEALTH_INSURANCE = 'enum.InstitutionalPartnerType.HEALTH_INSURANCE',
  TERRITORIAL_COMMUNITIES = 'enum.InstitutionalPartnerType.TERRITORIAL_COMMUNITIES',
  NATIONAL_EDUCATION = 'enum.InstitutionalPartnerType.NATIONAL_EDUCATION',
  HEALTH_ESTABLISHMENTS = 'enum.InstitutionalPartnerType.HEALTH_ESTABLISHMENTS',
  MEDICO_SOCIAL_ESTABLISHMENTS = 'enum.InstitutionalPartnerType.MEDICO_SOCIAL_ESTABLISHMENTS',
  OTHER = 'enum.InstitutionalPartnerType.OTHER',
}

export enum TypeOfPlace {
  FACILITY = 'enum.TypeOfPlace.FACILITY',
  FESTIVITIES = 'enum.TypeOfPlace.FESTIVITIES',
  HOME = 'enum.TypeOfPlace.HOME',
  HOSPITAL = 'enum.TypeOfPlace.HOSPITAL',
  MEANS_OF_TRANSPORT = 'enum.TypeOfPlace.MEANS_OF_TRANSPORT',
  PUBLIC_PLACE = 'enum.TypeOfPlace.PUBLIC_PLACE',
  SCATTERED = 'enum.TypeOfPlace.SCATTERED',
  UNKNOWN = 'enum.TypeOfPlace.UNKNOWN',
  OTHER = 'enum.TypeOfPlace.OTHER',
}

export enum YesNoUnknown {
  YES = 'enum.YesNoUnknown.YES',
  NO = 'enum.YesNoUnknown.NO',
  UNKNOWN = 'enum.YesNoUnknown.UNKNOWN',
}

export enum MeansOfTransport {
  LOCAL_PUBLIC_TRANSPORT = 'enum.MeansOfTransport.LOCAL_PUBLIC_TRANSPORT',
  BUS = 'enum.MeansOfTransport.BUS',
  FERRY = 'enum.MeansOfTransport.FERRY',
  PLANE = 'enum.MeansOfTransport.PLANE',
  TRAIN = 'enum.MeansOfTransport.TRAIN',
  OTHER = 'enum.MeansOfTransport.OTHER',
}

export enum DiseaseTransmissionMode {
  HUMAN_TO_HUMAN = 'enum.DiseaseTransmissionMode.HUMAN_TO_HUMAN',
  ANIMAL = 'enum.DiseaseTransmissionMode.ANIMAL',
  ENVIRONMENT = 'enum.DiseaseTransmissionMode.ENVIRONMENT',
  FOOD = 'enum.DiseaseTransmissionMode.FOOD',
  VECTOR_BORNE = 'enum.DiseaseTransmissionMode.VECTOR_BORNE',
  UNKNOWN = 'enum.DiseaseTransmissionMode.UNKNOWN',
}

export enum SamplePurpose {
  EXTERNAL = 'enum.SamplePurpose.EXTERNAL',
  INTERNAL = 'enum.SamplePurpose.INTERNAL',
}

export enum SampleMaterial {
  BLOOD = 'enum.SampleMaterial.BLOOD',
  SERA = 'enum.SampleMaterial.SERA',
  STOOL = 'enum.SampleMaterial.STOOL',
  NASAL_SWAB = 'enum.SampleMaterial.NASAL_SWAB',
  THROAT_SWAB = 'enum.SampleMaterial.THROAT_SWAB',
  NP_SWAB = 'enum.SampleMaterial.NP_SWAB',
  RECTAL_SWAB = 'enum.SampleMaterial.RECTAL_SWAB',
  ANTERIOR_NARES_SWAB = 'enum.SampleMaterial.ANTERIOR_NARES_SWAB',
  OROPHARYNGEAL_SWAB = 'enum.SampleMaterial.OROPHARYNGEAL_SWAB',
  CEREBROSPINAL_FLUID = 'enum.SampleMaterial.CEREBROSPINAL_FLUID',
  CRUST = 'enum.SampleMaterial.CRUST',
  TISSUE = 'enum.SampleMaterial.TISSUE',
  URINE = 'enum.SampleMaterial.URINE',
  CORNEA_PM = 'enum.SampleMaterial.CORNEA_PM',
  SALIVA = 'enum.SampleMaterial.SALIVA',
  URINE_PM = 'enum.SampleMaterial.URINE_PM',
  NUCHAL_SKIN_BIOPSY = 'enum.SampleMaterial.NUCHAL_SKIN_BIOPSY',
  SPUTUM = 'enum.SampleMaterial.SPUTUM',
  ENDOTRACHEAL_ASPIRATE = 'enum.SampleMaterial.ENDOTRACHEAL_ASPIRATE',
  BRONCHOALVEOLAR_LAVAGE = 'enum.SampleMaterial.BRONCHOALVEOLAR_LAVAGE',
  BRAIN_TISSUE = 'enum.SampleMaterial.BRAIN_TISSUE',
  PLEURAL_FLUID = 'enum.SampleMaterial.PLEURAL_FLUID',
  OP_ASPIRATE = 'enum.SampleMaterial.OP_ASPIRATE',
  NP_ASPIRATE = 'enum.SampleMaterial.NP_ASPIRATE',
  OTHER = 'enum.SampleMaterial.OTHER',
}

export enum SamplingReason {
  PRESENCE_OF_SYMPTOMS = 'enum.SamplingReason.PRESENCE_OF_SYMPTOMS',
  OUTBREAK = 'enum.SamplingReason.OUTBREAK',
  SCREENING = 'enum.SamplingReason.SCREENING',
  PROFESSIONAL_REASON = 'enum.SamplingReason.PROFESSIONAL_REASON',
  QUARANTINE_REGULATIONS = 'enum.SamplingReason.QUARANTINE_REGULATIONS',
  CONTACT_TO_CASE = 'enum.SamplingReason.CONTACT_TO_CASE',
  SWISS_COVID_APP_NOTIFICATION = 'enum.SamplingReason.SWISS_COVID_APP_NOTIFICATION',
  PLANNING_TO_TRAVEL = 'enum.SamplingReason.PLANNING_TO_TRAVEL',
  RETURNING_TRAVELER = 'enum.SamplingReason.RETURNING_TRAVELER',
  PERSONAL_REASON = 'enum.SamplingReason.PERSONAL_REASON',
  MOVING_RETURNING_RETIREMENT_HOME = 'enum.SamplingReason.MOVING_RETURNING_RETIREMENT_HOME',
  QUARANTINE_END = 'enum.SamplingReason.QUARANTINE_END',
  UNKNOWN = 'enum.SamplingReason.UNKNOWN',
  OTHER_REASON = 'enum.SamplingReason.OTHER_REASON',
}

export enum SpecimenCondition {
  ADEQUATE = 'enum.SpecimenCondition.ADEQUATE',
  NOT_ADEQUATE = 'enum.SpecimenCondition.NOT_ADEQUATE',
}

export enum PathogenTestResultType {
  INDETERMINATE = 'enum.PathogenTestResultType.INDETERMINATE',
  PENDING = 'enum.PathogenTestResultType.PENDING',
  NEGATIVE = 'enum.PathogenTestResultType.NEGATIVE',
  POSITIVE = 'enum.PathogenTestResultType.POSITIVE',
  NOT_DONE = 'enum.PathogenTestResultType.NOT_DONE',
}

export enum PathogenTestType {
  ANTIBODY_DETECTION = 'enum.PathogenTestType.ANTIBODY_DETECTION',
  ANTIGEN_DETECTION = 'enum.PathogenTestType.ANTIGEN_DETECTION',
  RAPID_TEST = 'enum.PathogenTestType.RAPID_TEST',
  CULTURE = 'enum.PathogenTestType.CULTURE',
  HISTOPATHOLOGY = 'enum.PathogenTestType.HISTOPATHOLOGY',
  ISOLATION = 'enum.PathogenTestType.ISOLATION',
  IGM_SERUM_ANTIBODY = 'enum.PathogenTestType.IGM_SERUM_ANTIBODY',
  IGA_SERUM_ANTIBODY = 'enum.PathogenTestType.IGA_SERUM_ANTIBODY',
  IGG_SERUM_ANTIBODY = 'enum.PathogenTestType.IGG_SERUM_ANTIBODY',
  INCUBATION_TIME = 'enum.PathogenTestType.INCUBATION_TIME',
  INDIRECT_FLUORESCENT_ANTIBODY = 'enum.PathogenTestType.INDIRECT_FLUORESCENT_ANTIBODY',
  DIRECT_FLUORESCENT_ANTIBODY = 'enum.PathogenTestType.DIRECT_FLUORESCENT_ANTIBODY',
  MICROSCOPY = 'enum.PathogenTestType.MICROSCOPY',
  NEUTRALIZING_ANTIBODIES = 'enum.PathogenTestType.NEUTRALIZING_ANTIBODIES',
  PCR_RT_PCR = 'enum.PathogenTestType.PCR_RT_PCR',
  GRAM_STAIN = 'enum.PathogenTestType.GRAM_STAIN',
  LATEX_AGGLUTINATION = 'enum.PathogenTestType.LATEX_AGGLUTINATION',
  CQ_VALUE_DETECTION = 'enum.PathogenTestType.CQ_VALUE_DETECTION',
  SEQUENCING = 'enum.PathogenTestType.SEQUENCING',
  DNA_MICROARRAY = 'enum.PathogenTestType.DNA_MICROARRAY',
  DENGUE_FEVER_ANTIBODIES = 'enum.PathogenTestType.DENGUE_FEVER_ANTIBODIES',
  DENGUE_FEVER_IGM = 'enum.PathogenTestType.DENGUE_FEVER_IGM',
  WEST_NILE_FEVER_ANTIBODIES = 'enum.PathogenTestType.WEST_NILE_FEVER_ANTIBODIES',
  WEST_NILE_FEVER_IGM = 'enum.PathogenTestType.WEST_NILE_FEVER_IGM',
  YELLOW_FEVER_ANTIBODIES = 'enum.PathogenTestType.YELLOW_FEVER_ANTIBODIES',
  YELLOW_FEVER_IGM = 'enum.PathogenTestType.YELLOW_FEVER_IGM',
  YERSINIA_PESTIS_ANTIGEN = 'enum.PathogenTestType.YERSINIA_PESTIS_ANTIGEN',
  OTHER = 'enum.PathogenTestType.OTHER',
}

export enum CaseIdentificationSource {
  UNKNOWN = 'enum.CaseIdentificationSource.UNKNOWN',
  OUTBREAK_INVESTIGATION = 'enum.CaseIdentificationSource.OUTBREAK_INVESTIGATION',
  CONTACT_TRACKING_APP = 'enum.CaseIdentificationSource.CONTACT_TRACKING_APP',
  SUSPICION_REPORT = 'enum.CaseIdentificationSource.SUSPICION_REPORT',
  CONTACT_TRACING = 'enum.CaseIdentificationSource.CONTACT_TRACING',
  SCREENING = 'enum.CaseIdentificationSource.SCREENING',
  OTHER = 'enum.CaseIdentificationSource.OTHER',
}

export enum ScreeningType {
  ON_HOSPITAL_ADMISSION = 'enum.ScreeningType.ON_HOSPITAL_ADMISSION',
  ON_CARE_HOME_ADMISSION = 'enum.ScreeningType.ON_CARE_HOME_ADMISSION',
  ON_ASYLUM_ADMISSION = 'enum.ScreeningType.ON_ASYLUM_ADMISSION',
  ON_ENTRY_FROM_RISK_AREA = 'enum.ScreeningType.ON_ENTRY_FROM_RISK_AREA',
  HEALTH_SECTOR_EMPLOYEE = 'enum.ScreeningType.HEALTH_SECTOR_EMPLOYEE',
  EDUCATIONAL_INSTITUTIONS = 'enum.ScreeningType.EDUCATIONAL_INSTITUTIONS',
  SELF_ARRANGED_TEST = 'enum.ScreeningType.SELF_ARRANGED_TEST',
  SELF_CONDUCTED_TEST = 'enum.ScreeningType.SELF_CONDUCTED_TEST',
  OTHER = 'enum.ScreeningType.OTHER',
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
  FIRST = 'enum.Trimester.FIRST',
  SECOND = 'enum.Trimester.SECOND',
  THIRD = 'enum.Trimester.THIRD',
  UNKNOWN = 'enum.Trimester.UNKNOWN',
}

export enum HospitalizationReason {
  REPORTED_DISEASE = 'enum.HospitalizationReasonType.REPORTED_DISEASE',
  UNKNOWN = 'enum.HospitalizationReasonType.UNKNOWN',
  OTHER = 'enum.HospitalizationReasonType.OTHER',
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
  PENDING = 'pending',
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
  AXILLARY = 'enum.TemperatureSource.AXILLARY',
  ORAL = 'enum.TemperatureSource.ORAL',
  RECTAL = 'enum.TemperatureSource.RECTAL',
  NON_CONTACT = 'enum.TemperatureSource.NON_CONTACT',
}

export enum TableAppearanceOptions {
  STANDARD = 'standard',
  MINIMAL = 'minimal',
}

export enum ConveyanceTypeOptions {
  CAR = 'enum.ConveyanceType.CAR',
  BUS = 'enum.ConveyanceType.BUS',
  MOTORBIKE = 'enum.ConveyanceType.MOTORBIKE',
  OTHER = 'enum.ConveyanceType.OTHER',
}

export enum TaskContextOptions {
  CASE = 'enum.TaskContext.CASE',
  CONTACT = 'enum.TaskContext.CONTACT',
  EVENT = 'enum.TaskContext.EVENT',
  GENERAL = 'enum.TaskContext.GENERAL',
}

export enum TracingApp {
  CORONA_WARN_APP = 'enum.TracingApp.CORONA_WARN_APP',
  OTHER = 'enum.TracingApp.OTHER',
  UNKNOWN = 'enum.TracingApp.UNKNOWN',
}

export enum TaskTypeOptions {
  ACTIVE_SEARCH_FOR_OTHER_CASES = 'enum.TaskType.ACTIVE_SEARCH_FOR_OTHER_CASES',
  CASE_ISOLATION = 'enum.TaskType.CASE_ISOLATION',
  CASE_INVESTIGATION = 'enum.TaskType.CASE_INVESTIGATION',
  CASE_MANAGEMENT = 'enum.TaskType.CASE_MANAGEMENT',
  CASE_BURIAL = 'enum.TaskType.CASE_BURIAL',
  CONTACT_TRACING = 'enum.TaskType.CONTACT_TRACING',
  SOURCECASE_TRACING = 'enum.TaskType.SOURCECASE_TRACING',
  SAMPLE_COLLECTION = 'enum.TaskType.SAMPLE_COLLECTION',
  CONTACT_INVESTIGATION = 'enum.TaskType.CONTACT_INVESTIGATION',
  CONTACT_FOLLOW_UP = 'enum.TaskType.CONTACT_FOLLOW_UP',
  CONTACT_MANAGEMENT = 'enum.TaskType.CONTACT_MANAGEMENT',
  ANIMAL_TESTING = 'enum.TaskType.ANIMAL_TESTING',
  EVENT_INVESTIGATION = 'enum.TaskType.EVENT_INVESTIGATION',
  EVENT_CONTINUE_INVESTIGATION = 'enum.TaskType.EVENT_CONTINUE_INVESTIGATION',
  EVENT_REQUEST_ADDITIONAL_INFORMATION = 'enum.TaskType.EVENT_REQUEST_ADDITIONAL_INFORMATION',
  TREATMENT_CENTER_ESTABLISHMENT = 'enum.TaskType.TREATMENT_CENTER_ESTABLISHMENT',
  ENVIRONMENTAL_HEALTH_ACTIVITIES = 'enum.TaskType.ENVIRONMENTAL_HEALTH_ACTIVITIES',
  DECONTAMINATION_DISINFECTION_ACTIVITIES = 'enum.TaskType.DECONTAMINATION_DISINFECTION_ACTIVITIES',
  QUARANTINE_PLACE = 'enum.TaskType.QUARANTINE_PLACE',
  QUARANTINE_MANAGEMENT = 'enum.TaskType.QUARANTINE_MANAGEMENT',
  QUARANTINE_ORDER_SEND = 'enum.TaskType.QUARANTINE_ORDER_SEND',
  VACCINATION_ACTIVITIES = 'enum.TaskType.VACCINATION_ACTIVITIES',
  ANIMAL_DEPOPULATION = 'enum.TaskType.ANIMAL_DEPOPULATION',
  OTHER = 'enum.TaskType.OTHER',
  DAILY_REPORT_GENERATION = 'enum.TaskType.DAILY_REPORT_GENERATION',
  SURVEILLANCE_REPORT_GENERATION = 'enum.TaskType.SURVEILLANCE_REPORT_GENERATION',
  WEEKLY_REPORT_GENERATION = 'enum.TaskType.WEEKLY_REPORT_GENERATION',
}

export enum TaskPriorityOptions {
  HIGH = 'enum.TaskPriority.HIGH',
  NORMAL = 'enum.TaskPriority.NORMAL',
  LOW = 'enum.TaskPriority.LOW',
}

export enum TaskStatusOptions {
  PENDING = 'enum.TaskStatus.PENDING',
  DONE = 'enum.TaskStatus.DONE',
  REMOVED = 'enum.TaskStatus.REMOVED',
  NOT_EXECUTABLE = 'enum.TaskStatus.NOT_EXECUTABLE',
}

export enum EntityRelevanceStatusOptions {
  ALL = 'enum.EntityRelevanceStatus.ALL',
  ACTIVE = 'enum.EntityRelevanceStatus.ACTIVE',
  ARCHIVED = 'enum.EntityRelevanceStatus.ARCHIVED',
}

export enum ContinentRelevanceStatusOptions {
  ALL = 'captions.continentAllContinents',
  ACTIVE = 'captions.continentActiveContinents',
  ARCHIVED = 'captions.continentArchivedContinents',
}

export enum EntryPointRelevanceStatusOptions {
  ALL = 'captions.pointOfEntryAllPointsOfEntry',
  ACTIVE = 'captions.pointOfEntryActivePointsOfEntry',
  ARCHIVED = 'captions.pointOfEntryArchivedPointsOfEntry',
}

export enum EntryPointActiveOptions {
  YES = 'strings.yes',
  NO = 'strings.no',
}

export enum SubcontinentRelevanceStatusOptions {
  ALL = 'captions.subcontinentAllSubcontinents',
  ACTIVE = 'captions.subcontinentActiveSubcontinents',
  ARCHIVED = 'captions.subcontinentArchivedSubcontinents',
}

export enum EventStatusOptions {
  SIGNAL = 'enum.EventStatus.SIGNAL',
  EVENT = 'enum.EventStatus.EVENT',
  SCREENING = 'enum.EventStatus.SCREENING',
  CLUSTER = 'enum.EventStatus.CLUSTER',
  DROPPED = 'enum.EventStatus.DROPPED',
}

export enum EventManagementStatusOptions {
  PENDING = 'enum.EventManagementStatus.PENDING',
  ONGOING = 'enum.EventManagementStatus.ONGOING',
  DONE = 'enum.EventManagementStatus.DONE',
  CLOSED = 'enum.EventManagementStatus.CLOSED',
}

export enum EventInvestigationStatusOptions {
  PENDING = 'enum.EventInvestigationStatus.PENDING',
  ONGOING = 'enum.EventInvestigationStatus.ONGOING',
  DONE = 'enum.EventInvestigationStatus.DONE',
  DISCARDED = 'enum.EventInvestigationStatus.DISCARDED',
}

export enum ContactProximity {
  TOUCHED_FLUID = 'enum.ContactProximity.TOUCHED_FLUID',
  PHYSICAL_CONTACT = 'enum.ContactProximity.PHYSICAL_CONTACT',
  CLOTHES_OR_OTHER = 'enum.ContactProximity.CLOTHES_OR_OTHER',
  CLOSE_CONTACT = 'enum.ContactProximity.CLOSE_CONTACT',
  FACE_TO_FACE_LONG = 'enum.ContactProximity.FACE_TO_FACE_LONG',
  MEDICAL_UNSAFE = 'enum.ContactProximity.MEDICAL_UNSAFE',
  SAME_ROOM = 'enum.ContactProximity.SAME_ROOM',
  AIRPLANE = 'enum.ContactProximity.AIRPLANE',
  FACE_TO_FACE_SHORT = 'enum.ContactProximity.FACE_TO_FACE_SHORT',
  MEDICAL_SAFE = 'enum.ContactProximity.MEDICAL_SAFE',
  MEDICAL_SAME_ROOM = 'enum.ContactProximity.MEDICAL_SAME_ROOM',
  AEROSOL = 'enum.ContactProximity.AEROSOL',
  MEDICAL_DISTANT = 'enum.ContactProximity.MEDICAL_DISTANT',
  MEDICAL_LIMITED = 'enum.ContactProximity.MEDICAL_LIMITED',
}

export enum ContactCategory {
  HIGH_RISK = 'enum.ContactCategory.HIGH_RISK',
  HIGH_RISK_MED = 'enum.ContactCategory.HIGH_RISK_MED',
  MEDIUM_RISK_MED = 'enum.ContactCategory.MEDIUM_RISK_MED',
  LOW_RISK = 'enum.ContactCategory.LOW_RISK',
  NO_RISK = 'enum.ContactCategory.NO_RISK',
}

export enum RiskLevel {
  LOW = 'enum.RiskLevel.LOW',
  MODERATE = 'enum.RiskLevel.MODERATE',
  HIGH = 'enum.RiskLevel.HIGH',
  UNKNOWN = 'enum.RiskLevel.UNKNOWN',
}

export enum ContactRelation {
  SAME_HOUSEHOLD = 'enum.ContactRelation.SAME_HOUSEHOLD',
  FAMILY_MEMBER_OR_FRIEND = 'enum.ContactRelation.FAMILY_MEMBER_OR_FRIEND',
  SAME_ENVIRONMENT = 'enum.ContactRelation.SAME_ENVIRONMENT',
  MEDICAL_CARE = 'enum.ContactRelation.MEDICAL_CARE',
  OTHER = 'enum.ContactRelation.OTHER',
}

export enum ContactClassification {
  UNCONFIRMED = 'enum.ContactClassification.UNCONFIRMED',
  CONFIRMED = 'enum.ContactClassification.CONFIRMED',
  NO_CONTACT = 'enum.ContactClassification.NO_CONTACT',
}

export enum ContactIdentificationSource {
  CASE_PERSON = 'enum.ContactIdentificationSource.CASE_PERSON',
  CONTACT_PERSON = 'enum.ContactIdentificationSource.CONTACT_PERSON',
  TRACING_APP = 'enum.ContactIdentificationSource.TRACING_APP',
  OTHER = 'enum.ContactIdentificationSource.OTHER',
  UNKNOWN = 'enum.ContactIdentificationSource.UNKNOWN',
}

export enum ContactStatus {
  ACTIVE = 'enum.ContactStatus.ACTIVE',
  CONVERTED = 'enum.ContactStatus.CONVERTED',
  DROPPED = 'enum.ContactStatus.DROPPED',
}

export enum ContactCountMethod {
  ALL = 'enum.EventContactCountMethod.ALL',
  SOURCE_CASE_IN_EVENT = 'enum.EventContactCountMethod.SOURCE_CASE_IN_EVENT',
  BOTH_METHODS = 'enum.EventContactCountMethod.BOTH_METHODS',
}

export enum UserRole {
  ADMIN = 'enum.UserRole.ADMIN',
  NATIONAL_USER = 'enum.UserRole.NATIONAL_USER',
  SURVEILLANCE_SUPERVISOR = 'enum.UserRole.SURVEILLANCE_SUPERVISOR',
  ADMIN_SUPERVISOR = 'enum.UserRole.ADMIN_SUPERVISOR',
  SURVEILLANCE_OFFICER = 'enum.UserRole.SURVEILLANCE_OFFICER',
  HOSPITAL_INFORMANT = 'enum.UserRole.HOSPITAL_INFORMANT',
  COMMUNITY_OFFICER = 'enum.UserRole.COMMUNITY_OFFICER',
  COMMUNITY_INFORMANT = 'enum.UserRole.COMMUNITY_INFORMANT',
  CASE_SUPERVISOR = 'enum.UserRole.CASE_SUPERVISOR',
  CASE_OFFICER = 'enum.UserRole.CASE_OFFICER',
  CONTACT_SUPERVISOR = 'enum.UserRole.CONTACT_SUPERVISOR',
  CONTACT_OFFICER = 'enum.UserRole.CONTACT_OFFICER',
  EVENT_OFFICER = 'enum.UserRole.EVENT_OFFICER',
  LAB_USER = 'enum.UserRole.LAB_USER',
  EXTERNAL_LAB_USER = 'enum.UserRole.EXTERNAL_LAB_USER',
  NATIONAL_OBSERVER = 'enum.UserRole.NATIONAL_OBSERVER',
  STATE_OBSERVER = 'enum.UserRole.STATE_OBSERVER',
  DISTRICT_OBSERVER = 'enum.UserRole.DISTRICT_OBSERVER',
  NATIONAL_CLINICIAN = 'enum.UserRole.NATIONAL_CLINICIAN',
  POE_INFORMANT = 'enum.UserRole.POE_INFORMANT',
  POE_SUPERVISOR = 'enum.UserRole.POE_SUPERVISOR',
  POE_NATIONAL_USER = 'enum.UserRole.POE_NATIONAL_USER',
  IMPORT_USER = 'enum.UserRole.IMPORT_USER',
  REST_EXTERNAL_VISITS_USER = 'enum.UserRole.REST_EXTERNAL_VISITS_USER',
  REST_USER = 'enum.UserRole.REST_USER',
  SORMAS_TO_SORMAS_CLIENT = 'enum.UserRole.SORMAS_TO_SORMAS_CLIENT',
  BAG_USER = 'enum.UserRole.BAG_USER',
}

export enum PointOfEntryType {
  AIRPORT = 'enum.PointOfEntryType.AIRPORT',
  SEAPORT = 'enum.PointOfEntryType.SEAPORT',
  GROUND_CROSSING = 'enum.PointOfEntryType.GROUND_CROSSING',
  OTHER = 'enum.PointOfEntryType.OTHER',
}

export enum AreaType {
  URBAN = 'enum.AreaType.URBAN',
  RURAL = 'enum.AreaType.RURAL',
  UNKNOWN = 'enum.AreaType.UNKNOWN',
}

export enum SymptomJournalStatus {
  UNREGISTERED = 'enum.SymptomJournalStatus.UNREGISTERED',
  REGISTERED = 'enum.SymptomJournalStatus.REGISTERED',
  ACCEPTED = 'enum.SymptomJournalStatus.ACCEPTED',
  REJECTED = 'enum.SymptomJournalStatus.REJECTED',
  DELETED = 'enum.SymptomJournalStatus.DELETED',
}

export enum SampleAssociationType {
  ALL = 'enum.SampleAssociationType.ALL',
  CASE = 'enum.SampleAssociationType.CASE',
  CONTACT = 'enum.SampleAssociationType.CONTACT',
  EVENT_PARTICIPANT = 'enum.SampleAssociationType.EVENT_PARTICIPANT',
}

export enum PersonAssociationType {
  ALL = 'enum.PersonAssociation.ALL',
  CASE = 'enum.PersonAssociation.CASE',
  CONTACT = 'enum.PersonAssociation.CONTACT',
  EVENT_PARTICIPANT = 'enum.PersonAssociation.EVENT_PARTICIPANT',
  IMMUNIZATION = 'enum.PersonAssociation.IMMUNIZATION',
  TRAVEL_ENTRY = 'enum.PersonAssociation.TRAVEL_ENTRY',
}

export enum UserStatus {
  ACTIVE = 'strings.active',
  INACTIVE = 'strings.inactive',
}

export enum DateFilterOptions {
  DATE = 'enum.DateFilterOption.DATE',
  EPI_WEEK = 'enum.DateFilterOption.EPI_WEEK',
}

export enum NewCaseDateType {
  MOST_RELEVANT = 'enum.NewCaseDateType.MOST_RELEVANT',
  ONSET = 'enum.NewCaseDateType.ONSET',
  REPORT = 'enum.NewCaseDateType.REPORT',
}

export enum PersonAddressType {
  HOME = 'enum.PersonAddressType.HOME',
  PLACE_OF_RESIDENCE = 'enum.PersonAddressType.PLACE_OF_RESIDENCE',
  PLACE_OF_EXPOSURE = 'enum.PersonAddressType.PLACE_OF_EXPOSURE',
  PLACE_OF_WORK = 'enum.PersonAddressType.PLACE_OF_WORK',
  PLACE_OF_ISOLATION = 'enum.PersonAddressType.PLACE_OF_ISOLATION',
  EVENT_LOCATION = 'enum.PersonAddressType.EVENT_LOCATION',
  OTHER_ADDRESS = 'enum.PersonAddressType.OTHER_ADDRESS',
}

export enum PersonContactDetailType {
  PHONE = 'enum.PersonContactDetailType.PHONE',
  EMAIL = 'enum.PersonContactDetailType.EMAIL',
  OTHER = 'enum.PersonContactDetailType.OTHER',
}

export enum PhoneNumberType {
  LANDLINE = 'enum.PhoneNumberType.LANDLINE',
  MOBILE = 'enum.PhoneNumberType.MOBILE',
  WORK = 'enum.PhoneNumberType.WORK',
  OTHER = 'enum.PhoneNumberType.OTHER',
}
