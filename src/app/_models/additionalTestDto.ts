import { SampleReferenceDto } from './sampleReferenceDto';
import { SimpleTestResultType } from './simpleTestResultType';

export interface AdditionalTestDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  sample?: SampleReferenceDto;
  testDateTime?: Date;
  haemoglobinuria?: SimpleTestResultType;
  proteinuria?: SimpleTestResultType;
  hematuria?: SimpleTestResultType;
  arterialVenousGasPH?: number;
  arterialVenousGasPco2?: number;
  arterialVenousGasPao2?: number;
  arterialVenousGasHco3?: number;
  gasOxygenTherapy?: number;
  altSgpt?: number;
  astSgot?: number;
  creatinine?: number;
  potassium?: number;
  urea?: number;
  haemoglobin?: number;
  totalBilirubin?: number;
  conjBilirubin?: number;
  wbcCount?: number;
  platelets?: number;
  prothrombinTime?: number;
  otherTestResults?: string;
}
