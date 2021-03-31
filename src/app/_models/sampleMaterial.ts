/* eslint-disable @typescript-eslint/no-redeclare */

export type SampleMaterial =
  | 'BLOOD'
  | 'SERA'
  | 'STOOL'
  | 'NASAL_SWAB'
  | 'THROAT_SWAB'
  | 'NP_SWAB'
  | 'RECTAL_SWAB'
  | 'CEREBROSPINAL_FLUID'
  | 'CRUST'
  | 'TISSUE'
  | 'URINE'
  | 'CORNEA_PM'
  | 'SALIVA'
  | 'URINE_PM'
  | 'NUCHAL_SKIN_BIOPSY'
  | 'SPUTUM'
  | 'ENDOTRACHEAL_ASPIRATE'
  | 'BRONCHOALVEOLAR_LAVAGE'
  | 'BRAIN_TISSUE'
  | 'OTHER';

export const SampleMaterial = {
  BLOOD: 'BLOOD' as SampleMaterial,
  SERA: 'SERA' as SampleMaterial,
  STOOL: 'STOOL' as SampleMaterial,
  NASALSWAB: 'NASAL_SWAB' as SampleMaterial,
  THROATSWAB: 'THROAT_SWAB' as SampleMaterial,
  NPSWAB: 'NP_SWAB' as SampleMaterial,
  RECTALSWAB: 'RECTAL_SWAB' as SampleMaterial,
  CEREBROSPINALFLUID: 'CEREBROSPINAL_FLUID' as SampleMaterial,
  CRUST: 'CRUST' as SampleMaterial,
  TISSUE: 'TISSUE' as SampleMaterial,
  URINE: 'URINE' as SampleMaterial,
  CORNEAPM: 'CORNEA_PM' as SampleMaterial,
  SALIVA: 'SALIVA' as SampleMaterial,
  URINEPM: 'URINE_PM' as SampleMaterial,
  NUCHALSKINBIOPSY: 'NUCHAL_SKIN_BIOPSY' as SampleMaterial,
  SPUTUM: 'SPUTUM' as SampleMaterial,
  ENDOTRACHEALASPIRATE: 'ENDOTRACHEAL_ASPIRATE' as SampleMaterial,
  BRONCHOALVEOLARLAVAGE: 'BRONCHOALVEOLAR_LAVAGE' as SampleMaterial,
  BRAINTISSUE: 'BRAIN_TISSUE' as SampleMaterial,
  OTHER: 'OTHER' as SampleMaterial,
};
