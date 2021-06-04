/* eslint-disable @typescript-eslint/no-redeclare */

export type DiseaseTransmissionMode =
  | 'HUMAN_TO_HUMAN'
  | 'ANIMAL'
  | 'ENVIRONMENT'
  | 'FOOD'
  | 'VECTOR_BORNE'
  | 'UNKNOWN';

export const DiseaseTransmissionMode = {
  HUMANTOHUMAN: 'HUMAN_TO_HUMAN' as DiseaseTransmissionMode,
  ANIMAL: 'ANIMAL' as DiseaseTransmissionMode,
  ENVIRONMENT: 'ENVIRONMENT' as DiseaseTransmissionMode,
  FOOD: 'FOOD' as DiseaseTransmissionMode,
  VECTORBORNE: 'VECTOR_BORNE' as DiseaseTransmissionMode,
  UNKNOWN: 'UNKNOWN' as DiseaseTransmissionMode,
};
