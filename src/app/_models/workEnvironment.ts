/* eslint-disable @typescript-eslint/no-redeclare */

export type WorkEnvironment =
  | 'UNKNOWN'
  | 'OPEN_SPACE_OFFICE'
  | 'FOOD_SECTOR'
  | 'BUILDING_SECTOR'
  | 'LOGISTICS_CENTER'
  | 'OTHER';

export const WorkEnvironment = {
  UNKNOWN: 'UNKNOWN' as WorkEnvironment,
  OPENSPACEOFFICE: 'OPEN_SPACE_OFFICE' as WorkEnvironment,
  FOODSECTOR: 'FOOD_SECTOR' as WorkEnvironment,
  BUILDINGSECTOR: 'BUILDING_SECTOR' as WorkEnvironment,
  LOGISTICSCENTER: 'LOGISTICS_CENTER' as WorkEnvironment,
  OTHER: 'OTHER' as WorkEnvironment,
};
