export type CaseOutcome = 'NO_OUTCOME' | 'DECEASED' | 'RECOVERED' | 'UNKNOWN';
export type CaseClassification =
  | 'NOT_CLASSIFIED'
  | 'SUSPECT'
  | 'PROBABLE'
  | 'CONFIRMED'
  | 'CONFIRMED_NO_SYMPTOMS'
  | 'CONFIRMED_UNKNOWN_SYMPTOMS'
  | 'NO_CASE';

export interface Person {
  uuid?: string;
  caption?: string;
  firstName?: string;
  lastName?: string;
}

export interface User {
  uuid?: string;
  caption?: string;
}

export type Disease =
  | 'AFP'
  | 'CHOLERA'
  | 'CONGENITAL_RUBELLA'
  | 'CSM'
  | 'DENGUE'
  | 'EVD'
  | 'GUINEA_WORM'
  | 'LASSA'
  | 'MEASLES'
  | 'MONKEYPOX'
  | 'NEW_INFLUENZA'
  | 'PLAGUE'
  | 'POLIO'
  | 'UNSPECIFIED_VHF'
  | 'WEST_NILE_FEVER'
  | 'YELLOW_FEVER'
  | 'RABIES'
  | 'ANTHRAX'
  | 'CORONAVIRUS'
  | 'PNEUMONIA'
  | 'MALARIA'
  | 'TYPHOID_FEVER'
  | 'ACUTE_VIRAL_HEPATITIS'
  | 'NON_NEONATAL_TETANUS'
  | 'HIV'
  | 'SCHISTOSOMIASIS'
  | 'SOIL_TRANSMITTED_HELMINTHS'
  | 'TRYPANOSOMIASIS'
  | 'DIARRHEA_DEHYDRATION'
  | 'DIARRHEA_BLOOD'
  | 'SNAKE_BITE'
  | 'RUBELLA'
  | 'TUBERCULOSIS'
  | 'LEPROSY'
  | 'LYMPHATIC_FILARIASIS'
  | 'BURULI_ULCER'
  | 'PERTUSSIS'
  | 'NEONATAL_TETANUS'
  | 'ONCHOCERCIASIS'
  | 'DIPHTERIA'
  | 'TRACHOMA'
  | 'YAWS_ENDEMIC_SYPHILIS'
  | 'MATERNAL_DEATHS'
  | 'PERINATAL_DEATHS'
  | 'INFLUENZA_A'
  | 'INFLUENZA_B'
  | 'H_METAPNEUMOVIRUS'
  | 'RESPIRATORY_SYNCYTIAL_VIRUS'
  | 'PARAINFLUENZA_1_4'
  | 'ADENOVIRUS'
  | 'RHINOVIRUS'
  | 'ENTEROVIRUS'
  | 'M_PNEUMONIAE'
  | 'C_PNEUMONIAE'
  | 'OTHER'
  | 'UNDEFINED';

export interface CaseItem {
  id: number | string;
  person: Person;
  outcome: CaseOutcome;
  caseClassification: CaseClassification;
  disease: Disease;
  uuid: string;
  reportingUser: User;
  personFirstName: string;
  personLastName: string;
}
