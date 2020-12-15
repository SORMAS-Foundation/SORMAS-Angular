export interface Disease {
  name: string;
  lastReport: string;
  count: 10;
}

export interface DiseaseResponsePayload {
  [key: string]: {
    lastReport: string;
    count: 10;
  };
}
