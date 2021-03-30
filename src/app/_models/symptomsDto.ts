/**
 * SORMAS REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.57.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CongenitalHeartDiseaseType } from './congenitalHeartDiseaseType';
import { SymptomState } from './symptomState';
import { TemperatureSource } from './temperatureSource';
import { YesNoUnknown } from './yesNoUnknown';

export interface SymptomsDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  abdominalPain?: SymptomState;
  anorexiaAppetiteLoss?: SymptomState;
  backache?: SymptomState;
  bedridden?: SymptomState;
  blackeningDeathOfTissue?: SymptomState;
  bleedingVagina?: SymptomState;
  bloodInStool?: SymptomState;
  bloodPressureDiastolic?: number;
  bloodPressureSystolic?: number;
  bloodUrine?: SymptomState;
  bloodyBlackStool?: SymptomState;
  buboesGroinArmpitNeck?: SymptomState;
  bulgingFontanelle?: SymptomState;
  chestPain?: SymptomState;
  chillsSweats?: SymptomState;
  conjunctivitis?: SymptomState;
  cough?: SymptomState;
  coughWithSputum?: SymptomState;
  coughWithHeamoptysis?: SymptomState;
  coughingBlood?: SymptomState;
  darkUrine?: SymptomState;
  dehydration?: SymptomState;
  diarrhea?: SymptomState;
  difficultyBreathing?: SymptomState;
  digestedBloodVomit?: SymptomState;
  eyePainLightSensitive?: SymptomState;
  eyesBleeding?: SymptomState;
  fatigueWeakness?: SymptomState;
  fever?: SymptomState;
  fluidInLungCavity?: SymptomState;
  glasgowComaScale?: number;
  gumsBleeding?: SymptomState;
  headache?: SymptomState;
  hearingloss?: SymptomState;
  heartRate?: number;
  height?: number;
  hiccups?: SymptomState;
  injectionSiteBleeding?: SymptomState;
  jaundice?: SymptomState;
  jaundiceWithin24HoursOfBirth?: YesNoUnknown;
  jointPain?: SymptomState;
  kopliksSpots?: SymptomState;
  lesions?: SymptomState;
  lesionsAllOverBody?: boolean;
  lesionsArms?: boolean;
  lesionsDeepProfound?: SymptomState;
  lesionsFace?: boolean;
  lesionsGenitals?: boolean;
  lesionsLegs?: boolean;
  lesionsOnsetDate?: Date;
  lesionsPalmsHands?: boolean;
  lesionsResembleImg1?: SymptomState;
  lesionsResembleImg2?: SymptomState;
  lesionsResembleImg3?: SymptomState;
  lesionsResembleImg4?: SymptomState;
  lesionsSameSize?: SymptomState;
  lesionsSameState?: SymptomState;
  lesionsSolesFeet?: boolean;
  lesionsThatItch?: SymptomState;
  lesionsThorax?: boolean;
  lossSkinTurgor?: SymptomState;
  lymphadenopathy?: SymptomState;
  lymphadenopathyAxillary?: SymptomState;
  lymphadenopathyCervical?: SymptomState;
  lymphadenopathyInguinal?: SymptomState;
  malaise?: SymptomState;
  midUpperArmCircumference?: number;
  musclePain?: SymptomState;
  nausea?: SymptomState;
  neckStiffness?: SymptomState;
  noseBleeding?: SymptomState;
  oedemaFaceNeck?: SymptomState;
  oedemaLowerExtremity?: SymptomState;
  onsetDate?: Date;
  onsetSymptom?: string;
  oralUlcers?: SymptomState;
  otherHemorrhagicSymptoms?: SymptomState;
  otherHemorrhagicSymptomsText?: string;
  otherNonHemorrhagicSymptoms?: SymptomState;
  otherNonHemorrhagicSymptomsText?: string;
  otitisMedia?: SymptomState;
  painfulLymphadenitis?: SymptomState;
  palpableLiver?: SymptomState;
  palpableSpleen?: SymptomState;
  patientIllLocation?: string;
  pharyngealErythema?: SymptomState;
  pharyngealExudate?: SymptomState;
  rapidBreathing?: SymptomState;
  redBloodVomit?: SymptomState;
  refusalFeedorDrink?: SymptomState;
  respiratoryRate?: number;
  runnyNose?: SymptomState;
  sidePain?: SymptomState;
  skinBruising?: SymptomState;
  skinRash?: SymptomState;
  soreThroat?: SymptomState;
  stomachBleeding?: SymptomState;
  sunkenEyesFontanelle?: SymptomState;
  swollenGlands?: SymptomState;
  symptomatic?: boolean;
  symptomsComments?: string;
  temperature?: number;
  temperatureSource?: TemperatureSource;
  throbocytopenia?: SymptomState;
  tremor?: SymptomState;
  bilateralCataracts?: SymptomState;
  unilateralCataracts?: SymptomState;
  congenitalGlaucoma?: SymptomState;
  pigmentaryRetinopathy?: SymptomState;
  purpuricRash?: SymptomState;
  microcephaly?: SymptomState;
  developmentalDelay?: SymptomState;
  splenomegaly?: SymptomState;
  meningoencephalitis?: SymptomState;
  radiolucentBoneDisease?: SymptomState;
  congenitalHeartDisease?: SymptomState;
  congenitalHeartDiseaseType?: CongenitalHeartDiseaseType;
  congenitalHeartDiseaseDetails?: string;
  unexplainedBleeding?: SymptomState;
  vomiting?: SymptomState;
  hydrophobia?: SymptomState;
  opisthotonus?: SymptomState;
  anxietyStates?: SymptomState;
  delirium?: SymptomState;
  uproariousness?: SymptomState;
  paresthesiaAroundWound?: SymptomState;
  excessSalivation?: SymptomState;
  insomnia?: SymptomState;
  paralysis?: SymptomState;
  excitation?: SymptomState;
  dysphagia?: SymptomState;
  aerophobia?: SymptomState;
  hyperactivity?: SymptomState;
  paresis?: SymptomState;
  agitation?: SymptomState;
  ascendingFlaccidParalysis?: SymptomState;
  erraticBehaviour?: SymptomState;
  coma?: SymptomState;
  convulsion?: SymptomState;
  fluidInLungCavityAuscultation?: SymptomState;
  fluidInLungCavityXray?: SymptomState;
  abnormalLungXrayFindings?: SymptomState;
  conjunctivalInjection?: SymptomState;
  acuteRespiratoryDistressSyndrome?: SymptomState;
  pneumoniaClinicalOrRadiologic?: SymptomState;
  lossOfTaste?: SymptomState;
  lossOfSmell?: SymptomState;
  wheezing?: SymptomState;
  skinUlcers?: SymptomState;
  inabilityToWalk?: SymptomState;
  inDrawingOfChestWall?: SymptomState;
  respiratoryDiseaseVentilation?: SymptomState;
  feelingIll?: SymptomState;
  fastHeartRate?: SymptomState;
  oxygenSaturationLower94?: SymptomState;
  weight?: number;
  alteredConsciousness?: SymptomState;
  confusedDisoriented?: SymptomState;
  hemorrhagicSyndrome?: SymptomState;
  hyperglycemia?: SymptomState;
  hypoglycemia?: SymptomState;
  meningealSigns?: SymptomState;
  otherComplications?: SymptomState;
  otherComplicationsText?: string;
  seizures?: SymptomState;
  sepsis?: SymptomState;
  shock?: SymptomState;
  feverishFeeling?: SymptomState;
  weakness?: SymptomState;
  fatigue?: SymptomState;
  coughWithoutSputum?: SymptomState;
  breathlessness?: SymptomState;
  chestPressure?: SymptomState;
  blueLips?: SymptomState;
  bloodCirculationProblems?: SymptomState;
  palpitations?: SymptomState;
  dizzinessStandingUp?: SymptomState;
  highOrLowBloodPressure?: SymptomState;
  urinaryRetention?: SymptomState;
  shivering?: SymptomState;
}
