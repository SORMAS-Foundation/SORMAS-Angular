export interface ListingDto {
  uuid: string;
  regionUuid: string;
  regionName: string;
  districtUuid: string;
  districtName: string;
  enabled?: boolean;
  endDate?: Date | null;
  disease: string;
}
