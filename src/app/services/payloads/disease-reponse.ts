export interface Disease {
  name: string;
  lastReport: string;
  count: number;
}

export interface DiseaseResponsePayload {
  [key: string]: {
    lastReport: string;
    count: number;
  };
}
